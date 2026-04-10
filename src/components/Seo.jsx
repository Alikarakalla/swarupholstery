import { useEffect } from 'react';
import { companyInfo } from '../data/siteData';

function Seo({ title, description, schema }) {
  useEffect(() => {
    const fullTitle = title === companyInfo.name ? title : `${title} | ${companyInfo.name}`;
    document.title = fullTitle;

    const upsertMeta = (selector, attribute, value) => {
      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }

      return tag;
    };

    upsertMeta('meta[name="description"]', 'name', 'description').setAttribute('content', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title').setAttribute('content', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description').setAttribute('content', description);
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card').setAttribute('content', 'summary_large_image');

    const existingSchema = document.getElementById('page-schema');

    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [description, schema, title]);

  return null;
}

export default Seo;
