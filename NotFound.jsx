import Seo from '../components/Seo.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <div className="page">
      <Seo title="Page not found" description="The page you are looking for does not exist." noindex />
      <section className="page-top nf">
        <div className="container center-text">
          <img src="/logo-transparent.png" width="120" height="120" alt="" className="nf-logo" />
          <h1 className="display">This page <span className="grad-text">got lost.</span></h1>
          <p className="lead">The link may be broken or the page may have moved. Head back home or explore our services.</p>
          <div className="hero-ctas center">
            <Button to="/" icon="arrow">Back to home</Button>
            <Button to="/services" variant="ghost">View services</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
