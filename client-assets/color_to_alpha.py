"""White-to-alpha for watercolor art (GIMP 'color to alpha' with white).

Paper texture is lifted to pure white first (anything brighter than PAPER is
treated as paper), then each pixel's alpha is how far its darkest channel sits
from white, and color is un-premultiplied so it composites back exactly over
white but shows the page or wall color through the paint everywhere else.
"""
import sys, numpy as np
from PIL import Image

PAPER = 0.93

def color_to_alpha(src, dst, max_side=1400):
    im = Image.open(src).convert("RGBA")
    im.thumbnail((max_side, max_side), Image.LANCZOS)
    a = np.asarray(im).astype(np.float32) / 255.0
    rgb, a0 = a[..., :3], a[..., 3:]
    c = np.clip(rgb / PAPER, 0, 1)
    alpha = np.max(1 - c, axis=-1, keepdims=True)
    safe = np.where(alpha > 1e-4, alpha, 1)
    out = np.where(alpha > 1e-4, 1 - (1 - c) / safe, 1)
    alpha = alpha * a0
    res = np.concatenate([np.clip(out, 0, 1), np.clip(alpha, 0, 1)], axis=-1)
    Image.fromarray((res * 255).round().astype(np.uint8), "RGBA").save(dst, "WEBP", quality=82, method=6)

if __name__ == "__main__":
    for s, d in zip(sys.argv[1::2], sys.argv[2::2]):
        color_to_alpha(s, d)
        print("ok", d)
