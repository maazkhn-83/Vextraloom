const Spark = () => (
  <svg className="m-sep" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
    <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z" fill="url(#vl-grad)" />
  </svg>
);

export default function Marquee({ items, reverse = false, outline = false, speed = 38 }) {
  const group = (hidden) => (
    <div className="m-group" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <span className="m-chunk" key={it}>
          <span className={`m-item ${outline ? 'outline' : ''}`}>{it}</span>
          <Spark />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
