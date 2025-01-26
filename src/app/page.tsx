'use client';

import { useEffect, useState } from 'react';
import ProductListSec from '@/components/common/ProductListSec';
import Brands from '@/components/homepage/Brands';
import DressStyle from '@/components/homepage/DressStyle';
import Header from '@/components/homepage/Header';
import Reviews from '@/components/homepage/Reviews';
import { Product } from '@/types/product.types';
import { Review } from '@/types/review.types';
import { reviewsData } from '@/utils/data';

// Define review data inside the component to avoid export conflicts with Next.js
// const reviewsData: Review[] = [
//   {
//     id: 1,
//     user: 'Dr. Alex K.',
//     content:
//       '"Finding the perfect surgical instruments for my practice used to be a challenge until I discovered SurgicalTools.com. The variety of high-quality instruments they offer is unmatched, catering to various medical fields and needs."',
//     rating: 5,
//     date: 'August 14, 2023',
//   },
//   {
//     id: 2,
//     user: 'Dr. Sarah M.',
//     content:
//       '"I have been using SurgicalTools.com for years, and I am continually impressed by their product quality and customer service."',
//     rating: 4,
//     date: 'July 22, 2023',
//   },
// ];

// Component definition
export default function Home() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [topSelling, setTopSelling] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        console.log('Data:', data);

        // Filter top-rated products with a rating of 5
        const topRatedProducts = data.products.filter(
          (product: Product) => product.rating === 5
        );

        setNewArrivals(data.products);
        setTopSelling(topRatedProducts);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }

    fetchProductData();
  }, []);

  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec title="NEW ARRIVALS" data={newArrivals} viewAllLink="/shop/all" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="TOP SELLING" data={topSelling} viewAllLink="/shop/all" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}

// Optional Next.js page configurations if needed
// export const config = {


//   runtime: 'edge', // or 'experimental-edge', or remove if not needed
// };
