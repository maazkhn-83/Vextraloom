import Seo from '../components/Seo.jsx';
import {
  ServicePageShell, ServiceHero, OfferGrid, ProcessSteps, BenefitGrid, ToolsRow, FAQ, CtaBand,
} from '../components/ServiceBlocks.jsx';

export default function ServicePage({ service }) {
  return (
    <ServicePageShell service={service}>
      <Seo title={service.name} description={service.metaDesc} />
      <ServiceHero service={service} />
      <OfferGrid service={service} />
      <ProcessSteps service={service} />
      <BenefitGrid service={service} />
      <ToolsRow service={service} />
      <FAQ items={service.faqs} />
      <CtaBand title={`Ready to talk about ${service.name.toLowerCase()}?`} />
    </ServicePageShell>
  );
}
