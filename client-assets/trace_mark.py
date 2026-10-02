"""Trace a black-on-white raster mark into a single SVG path (potracer)."""
import sys, numpy as np, potrace
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("L")
a = np.asarray(im) < 128
ys, xs = np.where(a)
pad = 12
y0, y1, x0, x1 = max(ys.min() - pad, 0), ys.max() + pad, max(xs.min() - pad, 0), xs.max() + pad
a = a[y0:y1, x0:x1]
h, w = a.shape
paths = potrace.Bitmap(~a).trace(turdsize=6, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
                                alphamax=1.0, opticurve=True, opttolerance=0.25)
f = lambda p: f"{p.x:.1f} {p.y:.1f}"
d = []
for curve in paths:
    d.append(f"M{f(curve.start_point)}")
    for seg in curve:
        if seg.is_corner:
            d.append(f"L{f(seg.c)}L{f(seg.end_point)}")
        else:
            d.append(f"C{f(seg.c1)} {f(seg.c2)} {f(seg.end_point)}")
    d.append("Z")
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}"><path fill="currentColor" fill-rule="evenodd" d="{"".join(d)}"/></svg>'
open(dst, "w").write(svg)
print(w, h, len(svg) // 1024, "KB", len(paths), "curves")
