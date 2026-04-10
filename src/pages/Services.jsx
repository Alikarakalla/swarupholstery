import AtelierEditorialServicesGrid from '../components/AtelierEditorialServicesGrid';
import AtelierEstimateCta from '../components/AtelierEstimateCta';
import AtelierPageIntro from '../components/AtelierPageIntro';
import AtelierTextileLibrarySection from '../components/AtelierTextileLibrarySection';
import Seo from '../components/Seo';
import {
  servicesEditorialCards,
  servicesFinalCta,
  servicesPageIntro,
  servicesTextileLibrary,
} from '../data/siteData';

function Services() {
  return (
    <>
      <Seo
        description="Explore bespoke upholstery services, custom headboards, antique restoration, and curated textile selections from Swar Upholstery."
        title="Services"
      />

      <AtelierPageIntro {...servicesPageIntro} />
      <AtelierEditorialServicesGrid cards={servicesEditorialCards} />
      <AtelierTextileLibrarySection section={servicesTextileLibrary} />
      <AtelierEstimateCta cta={servicesFinalCta} />
    </>
  );
}

export default Services;
