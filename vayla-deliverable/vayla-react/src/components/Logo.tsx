const LOGO_FULL = '/VAYLA_S_LOGO_White.png';
const LOGO_MARK = '/VAYLA_logo.png';

export function Logo({ size = 48, withWord = true }: { size?: number; withWord?: boolean }) {
  // PNG is a square canvas; logo artwork sits in the center — needs ~56px+ height to read clearly.
  const height = size + 8;
  const src = withWord ? LOGO_FULL : LOGO_MARK;

  return (
    <div className="inline-flex items-center">
      <img
        src={src}
        alt="VAYLA"
        height={height}
        className="w-auto object-contain"
        style={{ height, width: 'auto' }}
        draggable={false}
      />
    </div>
  );
}
