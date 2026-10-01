import SmartImage from './SmartImage.jsx';

// Browser frame whose full-page screenshot scrolls top-to-bottom on a loop (home highlight).
export default function AutoMockup({ project, reverse = false, delay = 0 }) {
  const ratio = project.height / project.width;
  return (
    <div className="browser auto" style={{ '--dur': `${Math.min(40, Math.max(8, ratio * 8))}s`, '--delay': `${delay}s`, '--dir': reverse ? 'alternate-reverse' : 'alternate' }}>
      <div className="browser-bar"><i /><i /><i /><span className="url">{project.name}</span></div>
      <div className="browser-view">
        <div className="scroller">
          <SmartImage src={project.image} alt={`${project.name} website design (${project.industry})`} width={project.width} height={project.height} label={project.name} />
        </div>
      </div>
    </div>
  );
}
