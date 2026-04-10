import { useMemo, useState } from 'react';
import AtelierPageIntro from '../components/AtelierPageIntro';
import FabricsCategoryBar from '../components/FabricsCategoryBar';
import FabricsGrid from '../components/FabricsGrid';
import FabricsSampleCta from '../components/FabricsSampleCta';
import Seo from '../components/Seo';
import {
  fabricsCategories,
  fabricsCollection,
  fabricsPageIntro,
  fabricsSampleCta,
} from '../data/siteData';

function Fabrics() {
  const [activeCategory, setActiveCategory] = useState('All Materials');

  const visibleItems = useMemo(() => {
    if (activeCategory === 'All Materials') {
      return fabricsCollection;
    }

    return fabricsCollection.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Seo
        description="Explore the Swar Upholstery fabric library, including heritage velvets, washed linens, Italian leather, silk brocades, and performance weaves."
        title="Fabrics"
      />

      <AtelierPageIntro {...fabricsPageIntro} />
      <FabricsCategoryBar
        activeCategory={activeCategory}
        categories={fabricsCategories}
        onSelect={setActiveCategory}
      />
      <FabricsGrid items={visibleItems} />
      <FabricsSampleCta cta={fabricsSampleCta} />
    </>
  );
}

export default Fabrics;
