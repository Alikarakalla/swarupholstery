import ContactHeroIntro from '../components/ContactHeroIntro';
import ContactInquiryBooking from '../components/ContactInquiryBooking';
import ContactStudioSection from '../components/ContactStudioSection';
import ContactTextureShowcase from '../components/ContactTextureShowcase';
import Seo from '../components/Seo';
import {
  contactCalendarPreview,
  contactPageIntro,
  contactProjectTypes,
  contactSchema,
  contactStudioDetails,
  contactStudioMap,
  contactTextureShowcase,
} from '../data/siteData';

function Contact() {
  return (
    <>
      <Seo
        description="Contact Swar Upholstery Inc in Ottawa for upholstery, restoration, and free quote inquiries."
        schema={contactSchema}
        title="Contact"
      />

      <ContactHeroIntro {...contactPageIntro} />
      <ContactInquiryBooking
        calendar={contactCalendarPreview}
        projectTypes={contactProjectTypes}
      />
      <ContactStudioSection details={contactStudioDetails} map={contactStudioMap} />
      <ContactTextureShowcase items={contactTextureShowcase} />
    </>
  );
}

export default Contact;
