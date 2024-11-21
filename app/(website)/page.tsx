'use client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import HeroSection from './components/Hero';
import Background from './components/Background';
import DiscoverInovativePaymentSolutions from './components/DiscoverInvativePaymentSolutions';
import FinancialFreedom from './components/FinancialFreedom';
import FinancialEvolution from './components/FinancialEvolution';
// import { InfiniteMovingCardsDemo } from './components/Slider';
import Slider from './components/Slider';

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden pb-24 pt-16">
      {/* <> */}
        <section className="">
          <HeroSection />
          <Background />
        </section>
        {/* [#F0CBF0] */}
        <section className="w-full bg-[#FDF4F5] dark:bg-inherit py-16 px-8 mx-auto xl:px-">
          <DiscoverInovativePaymentSolutions />
        </section>
        <section className="w-full bg-[#] py-16 mx-auto xl:px-0">
          <Slider />
        </section>
        <section className='w-full bg-[#E1AFD1] dark:bg-inherit py-24 mx-auto xl:px-0'>
          <FinancialFreedom />
        </section>
        <section className='w-full bg-[#] pt-16 mx-auto xl:px-0'>
          <FinancialEvolution />
        </section>
    </main>
  )
          {/* <InfiniteMovingCardsDemo /> */}
}
