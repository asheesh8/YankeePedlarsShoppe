/**
 * A handwritten manila price tag on a short string, like the ones on every
 * piece in the shop. `stringLength` draws the string up from the tag's hole;
 * the tag tips back to level when its parent `.group` is hovered.
 */
export function HangTag({
  children,
  leopard = false,
  tilt = -4,
  stringLength = 18,
  className = "",
}: {
  children: React.ReactNode;
  leopard?: boolean;
  tilt?: number;
  stringLength?: number;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`} style={{ paddingTop: stringLength }}>
      {stringLength > 0 && (
        <span aria-hidden className="tag-string left-[1.02rem] top-0" style={{ height: stringLength + 14 }} />
      )}
      <span
        className={`hang-tag origin-[1rem_50%] transition-transform duration-300 ease-out group-hover:rotate-0 group-focus-visible:rotate-0 ${leopard ? "hang-tag--leopard" : ""}`}
        style={{ rotate: `${tilt}deg` }}
      >
        {leopard ? <span>{children}</span> : children}
      </span>
    </span>
  );
}
