import ProductListSec from '@/components/common/ProductListSec';
import Brands from '@/components/homepage/Brands';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
import Reviews from '@/components/homepage/Reviews';
import { Product } from '@/types/product.types';
import { reviewsData } from '@/utils/data';

// Component definition
interface HomeProps {
  newArrivals: Product[]; // Type for newArrivals
  topSelling: Product[];  // Type for topSelling
}

export default async function Home() {
  // Fetch data within the component
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const data = await response.json();

  // Filter top-rated products with a rating of 5
  const topRatedProducts = data.products.filter((product: Product) => product.rating === 5);

  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec title="NEW ARRIVALS" data={data.products} viewAllLink="/shop/all" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="TOP SELLING" data={topRatedProducts} viewAllLink="/shop/all" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
