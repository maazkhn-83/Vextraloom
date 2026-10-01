import { Link } from 'react-router-dom';
import Icon from './Icons.jsx';

export default function Button({ to, href, variant = 'primary', icon, children, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (<><span>{children}</span>{icon && <Icon name={icon} size={18} />}</>);
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  const external = /^https?:/.test(href || '');
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {inner}
    </a>
  );
}
