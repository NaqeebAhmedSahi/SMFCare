import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    // price: 120,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic2.png"],
    // price: 260,
    // discount: {
    //   amount: 0,
    //   percentage: 20,
    // },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic3.png"],
    // price: 180,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    // price: 160,
    // discount: {
    //   amount: 0,
    //   percentage: 30,
    // },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    // price: 232,
    // discount: {
    //   amount: 0,
    //   percentage: 20,
    // },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    // price: 145,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic7.png"],
    // price: 80,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic8.png"],
    // price: 210,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    // price: 242,
    // discount: {
    //   amount: 0,
    //   percentage: 20,
    // },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    // price: 145,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic14.png"],
    // price: 180,
    // discount: {
    //   amount: 0,
    //   percentage: 0,
    // },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Beauty Instruments",
    srcUrl: "/images/surgi-style-5.jpg",
    gallery: ["/images/pic15.png"],
    // price: 150,
    // discount: {
    //   amount: 0,
    //   percentage: 30,
    // },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Dr. Alex K.",
    content:
      '"Finding the perfect surgical instruments for my practice used to be a challenge until I discovered SurgicalTools.com. The variety of high-quality instruments they offer is unmatched, catering to various medical fields and needs."',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Dr. Sarah M.",
    content: `"The precision and durability of the surgical tools I received from SurgicalTools.com are remarkable. From scalpels to forceps, every instrument I've purchased has exceeded my expectations in performance and quality."`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Dr. Ethan R.",
    content: `"This surgical scalpel is a must-have for any professional. The ergonomic handle and sharp blade are perfect for delicate procedures. I can clearly see the craftsmanship in every detail of this instrument."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Dr. Olivia P.",
    content: `"As a surgeon, precision and reliability are key. These surgical instruments not only represent those qualities but also feel incredibly well-made and comfortable to use. It's clear that these tools are designed with functionality in mind."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Dr. Liam K.",
    content: `"These surgical instruments are the perfect blend of comfort and performance. The materials used are top-notch, and the design ensures that each tool fits perfectly in hand. They have truly elevated the standard of care in my practice."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Dr. Samantha D.",
    content: `"I am thoroughly impressed with these surgical instruments! The precision and reliability are outstanding. As a fellow medical professional, I appreciate the attention to detail and how each tool is designed for optimal performance."`,
    rating: 5,
    date: "August 19, 2023",
  },
  {
    id: 7,
    user: "Dr. James W.",
    content: `"I've been in the surgical field for over 15 years, and these instruments have quickly become my go-to tools. They have maintained their sharpness after repeated use, and the ergonomic design is perfect for long procedures."`,
    rating: 5,
    date: "August 20, 2023",
  },
  {
    id: 8,
    user: "Dr. Natalie R.",
    content: `"SurgicalTools.com offers an exceptional selection of instruments. The quality and precision are unparalleled, and I love that the tools arrive sterile and ready for immediate use. Definitely recommend to my colleagues!"`,
    rating: 5,
    date: "August 21, 2023",
  },
  {
    id: 9,
    user: "Dr. William T.",
    content: `"These surgical instruments make my work easier. They’re incredibly sharp, lightweight, and comfortable to handle. I’ve noticed a significant improvement in my procedures thanks to the precision these tools provide."`,
    rating: 5,
    date: "August 22, 2023",
  },
  {
    id: 10,
    user: "Dr. Mia H.",
    content: `"I've used various brands of surgical instruments, but none have impressed me like these. The build quality is superb, and they remain durable even after countless uses. I highly recommend SurgicalTools.com to all my fellow surgeons."`,
    rating: 5,
    date: "August 23, 2023",
  },
  {
    id: 11,
    user: "Dr. George F.",
    content: `"What sets SurgicalTools.com apart is not only the quality of the instruments but their outstanding customer service. They answered all my questions and ensured I had everything I needed for my practice."`,
    rating: 5,
    date: "August 24, 2023",
  },
  {
    id: 12,
    user: "Dr. Hannah L.",
    content: `"I’ve been using SurgicalTools.com instruments in my clinic for a while now. The precision is second to none, and their products make my job easier. I appreciate the innovative designs that improve patient outcomes."`,
    rating: 5,
    date: "August 25, 2023",
  },
];


export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
