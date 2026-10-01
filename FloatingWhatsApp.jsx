import Icon from './Icons.jsx';
import { WHATSAPP_URL } from '../config/site.js';

export default function FloatingWhatsApp() {
  return (
    <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with VEXTRALOOM on WhatsApp">
      <Icon name="whatsapp" size={28} stroke={1.8} />
    </a>
  );
}
