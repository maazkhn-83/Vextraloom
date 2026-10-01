import Icon from './Icons.jsx';

// Large faint line icons that drift slowly up and down. Used on Home and Contact ONLY.
const ITEMS = [
  { n: 'laptop', l: 4, t: 3, s: 190, d: 22, o: 0 },
  { n: 'video', l: 78, t: 6, s: 170, d: 26, o: -6 },
  { n: 'code', l: 42, t: 12, s: 150, d: 24, o: -12 },
  { n: 'music', l: 90, t: 20, s: 130, d: 28, o: -4 },
  { n: 'cpu', l: 8, t: 26, s: 180, d: 25, o: -9 },
  { n: 'camera', l: 62, t: 31, s: 170, d: 23, o: -15 },
  { n: 'social', l: 24, t: 40, s: 150, d: 27, o: -3 },
  { n: 'pen', l: 86, t: 46, s: 190, d: 24, o: -10 },
  { n: 'cart', l: 5, t: 54, s: 170, d: 26, o: -7 },
  { n: 'megaphone', l: 48, t: 60, s: 180, d: 22, o: -13 },
  { n: 'pentool', l: 80, t: 70, s: 160, d: 28, o: -2 },
  { n: 'search', l: 16, t: 76, s: 150, d: 25, o: -11 },
  { n: 'bot', l: 56, t: 84, s: 170, d: 23, o: -5 },
  { n: 'image', l: 88, t: 92, s: 150, d: 27, o: -8 },
  { n: 'chart', l: 30, t: 94, s: 140, d: 24, o: -14 },
];

export default function Watermark({ count = ITEMS.length }) {
  const step = ITEMS.length / count;
  const list = Array.from({ length: count }, (_, i) => ITEMS[Math.floor(i * step)]);
  return (
    <div className="watermark" aria-hidden="true">
      {list.map((it) => (
        <span key={it.n} className="wm-item" style={{ left: `${it.l}%`, top: `${it.t}%`, '--d': `${it.d}s`, animationDelay: `${it.o}s` }}>
          <Icon name={it.n} size={it.s} stroke={0.7} />
        </span>
      ))}
    </div>
  );
}
