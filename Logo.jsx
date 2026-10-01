import { Link } from 'react-router-dom';

export default function Logo({ size = 44, text = true, className = '', ...rest }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label="VEXTRALOOM home" {...rest}>
      <img src="/logo-transparent.png" alt="" width={size} height={size} className="logo-img" />
      {text && <span className="logo-text">VEXTRALOOM</span>}
    </Link>
  );
}
