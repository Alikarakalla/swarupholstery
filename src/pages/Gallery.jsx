import AtelierPageIntro from '../components/AtelierPageIntro';
import PortfolioBentoGrid from '../components/PortfolioBentoGrid';
import PortfolioFeaturedCaseStudy from '../components/PortfolioFeaturedCaseStudy';
import PortfolioFinalCta from '../components/PortfolioFinalCta';
import PortfolioMethodology from '../components/PortfolioMethodology';
import Seo from '../components/Seo';
import {
  portfolioBentoItems,
  portfolioFeaturedCaseStudy,
  portfolioFinalCta,
  portfolioMethodology,
  portfolioPageIntro,
} from '../data/siteData';

function Gallery() {
  return (
    <>
      <Seo
        description="Explore the Swar Upholstery portfolio, including featured restoration work, bespoke commissions, and material-led interior transformations."
        title="Portfolio"
      />

      <AtelierPageIntro {...portfolioPageIntro} />
      <PortfolioFeaturedCaseStudy study={portfolioFeaturedCaseStudy} />
      <PortfolioBentoGrid items={portfolioBentoItems} />
      <PortfolioMethodology steps={portfolioMethodology} />
      <PortfolioFinalCta cta={portfolioFinalCta} />
    </>
  );
}

export default Gallery;
