

import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { Banner } from "@src/features/home/Banner";
import { TopCategories } from "@src/features/home/TopCategories";






export default function Home() {
  return (
  
<div>
<Banner />
<TopCategories />
<FeaturedProducts title="Productos Con Descuento" />
<FeaturedProducts title="Todo para El indor" />
<FeaturedProducts title="Accesorios" />
<FeaturedProducts title="Productos mas Vendidos" />
<FeaturedProducts title="Productos menos vendidos" />

</div>

     
    
  );
}
