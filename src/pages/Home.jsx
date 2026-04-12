import AtelierBentoServices from '../components/AtelierBentoServices';
import AtelierFeaturedTestimonial from '../components/AtelierFeaturedTestimonial';
import HomeBrandsMarquee from '../components/HomeBrandsMarquee';
import AtelierHomeCta from '../components/AtelierHomeCta';
import AtelierHomeHero from '../components/AtelierHomeHero';
import AtelierMaterialLibrary from '../components/AtelierMaterialLibrary';
import AtelierPhilosophy from '../components/AtelierPhilosophy';
import Seo from '../components/Seo';
import {
  companyInfo,
  contactSchema,
  designReferenceImages,
  featuredTestimonial,
  homeBentoServices,
  homeBrandPartners,
  homeHeroSlides,
  homePhilosophyPoints,
  materialLibraryTags,
} from '../data/siteData';

function Home() {
  return (
    <>
      <Seo
        description="Premium upholstery, seat restoration, and custom interior craftsmanship in Ottawa for vehicles and furniture."
        schema={contactSchema}
        title={companyInfo.name}
      />

      <AtelierHomeHero slides={homeHeroSlides} />
      <HomeBrandsMarquee items={homeBrandPartners} />
      <AtelierPhilosophy
        accentImage={designReferenceImages.philosophyAccent}
        image={designReferenceImages.philosophyPrimary}
        points={homePhilosophyPoints}
      />
      <AtelierBentoServices services={homeBentoServices} />
      <AtelierMaterialLibrary image={designReferenceImages.materialLibrary} tags={materialLibraryTags} />
      <AtelierFeaturedTestimonial testimonial={featuredTestimonial} />
      <AtelierHomeCta />
    </>
  );
}

export default Home;
