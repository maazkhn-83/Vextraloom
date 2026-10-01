import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, noindex = false }) {
  const full = title.includes('VEXTRALOOM') ? title : `${title} | VEXTRALOOM`;
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
}
