import { useState } from 'react';

// Image with a designed fallback card (gradient + name) so a missing file never shows a broken icon.
export default function SmartImage({ src, alt, width, height, label, className = '', style, eager = false, ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        className={`img-fallback ${className}`} role="img" aria-label={alt}
        style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined, ...style }}
      >
        <span>{label || alt}</span>
      </span>
    );
  }
  return (
    <img
      src={src} alt={alt} width={width} height={height} className={className} style={style}
      loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} {...rest}
    />
  );
}
