import AnimatedTextWord from '@/components/AnimatedTextWord'
import React, { useEffect, useState } from 'react'
import HexagonCard, { Modal } from './components/HexagonCard';

const Why = () => {
  const firstCardExcerpt = 'Digital Shared Services Limited, trading as Digital PayGo...';
  const firstCardFullContent = 'Digital Shared Services Limited trading as Digital PayGo, is a Zambian-based Fintech providing payment solutions driven by a mobile first approach.';
  const secondCardExcerpt = 'These solutions target mobile account users, financially excluded...'
  const secondCardFullContent = 'These solutions target mobile account users, financially excluded Adults, Financial Institutions, DFS providers and so ensure financial inclusion of all prospective players in the financial ecosystem.'
  const thirdCardExcerpt = 'At Digital Paygo, we believe in the power...'
  const thirdCardFullContent = 'At Digital Paygo, we believe in the power of collaborative partnerships and a shared approach to technology development and delivery which eliminates barriers to financial inclusion and is vital to digital ecosystem growth.'

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => { // <-- Add a function to close the modal
    setIsModalOpen(false);
    setModalContent('');
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); 
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  return (
    <div className='flex flex-col pb-8 pt-16 lg:pb-40 px-8'>
      <div className='md:mb-4'>
        <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-8 w-full lg:max-w-lg mx-auto">
            <AnimatedTextWord text='Why we are here' />
        </h2>
      </div>
      <div className="pb-4 sm:flex sm:justify-center sm:items-center sm:flex-col md:relative md:mx-auto md:items-center"  style={isLargeScreen ? { width: '930px', height: '450px' }: {width: 'auto', height: 'auto'}}>
        <div className={`flex ${isLargeScreen ? 'absolute inset-0 justify-around items-center' : 'flex-col'}`}>
          <HexagonCard
            excerpt={firstCardExcerpt}
            onOpenModal={openModal}
            fullContent={firstCardFullContent}
            className=" w-[350px] h-[350px] z-10"
            style={isLargeScreen ? { top: '-14%', left: '-20%' }: {}}
          >
          </HexagonCard>
        </div>
        <div className={`flex ${isLargeScreen ? 'absolute inset-0 justify-around items-center' : 'flex-col'}`}>
          <HexagonCard
            excerpt={secondCardExcerpt}
            onOpenModal={openModal}
            fullContent={secondCardFullContent}
            className="absolute w-[350px] h-[350px] z-20"
            style={isLargeScreen ? { top: '-14%', left: '22%' }: {}}
          >
          </HexagonCard>
        </div>
        <div className={`flex ${isLargeScreen ? 'absolute inset-0 justify-around items-center' : 'flex-col'}`}>
          <HexagonCard
            excerpt={thirdCardExcerpt}
            onOpenModal={openModal}
            fullContent={thirdCardFullContent}
            className="absolute w-[350px] h-[350px] z-30"
            style={isLargeScreen ? { top: '55%', left: '1%' }: {}}
          >
            <p className="text-lg text-center">
              {/* At Digital Paygo, we believe in the power of collaborative partnerships and a shared approach to technology development and delivery which eliminates barriers to financial inclusion and is vital to digital ecosystem growth. */}
            </p>
          </HexagonCard>
        </div>
      </div>
      
      {/* <-- Add the Modal component conditionally */}
      {isModalOpen && (
        <Modal content={modalContent} onClose={closeModal} />
      )}
    </div>
  )
}

export default Why


// import AnimatedTextWord from '@/components/AnimatedTextWord'
// import React, { useEffect, useState } from 'react'
// import HexagonCard from './components/HexagonCard';

// const Why = () => {
//   const firstCardExcerpt = 'Digital Shared Services Limited, trading as Digital PayGo...';
//   const firstCardFullContent = 'Digital Shared Services Limited trading as Digital PayGo, is a Zambian-based Fintech providing payment solutions driven by a mobile first approach.';
//   const secondCardExcerpt = 'These solutions target mobile account users, financially excluded...'
//   const secondCardFullContent = 'These solutions target mobile account users, financially excluded Adults, Financial Institutions, DFS providers and so ensure financial inclusion of all prospective players in the financial ecosystem.'
//   const thirdCardExcerpt = 'At Digital Paygo, we believe in the power...'
//   const thirdCardFullContent = 'At Digital Paygo, we believe in the power of collaborative partnerships and a shared approach to technology development and delivery which eliminates barriers to financial inclusion and is vital to digital ecosystem growth.'

//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (content: string) => {
//     setModalContent(content);
//     setIsModalOpen(true);
//   };

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 768); 
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);
  
//   return (
//     <>
//       <div className='md:mb-4'>
//         <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-8 w-full lg:max-w-lg mx-auto">
//             <AnimatedTextWord text='Why we are here' />
//         </h2>
//       </div>
//       <div className="pb-4 sm:flex sm:justify-center sm:items-center sm:flex-col md:relative md:mx-auto md:items-center"  style={isLargeScreen ? { width: '930px', height: '450px' }: {width: 'auto', height: 'auto'}}>
//         <div className={`flex ${isLargeScreen ? 'absolute inset-0 justify-around items-center' : 'flex-col'}`}>
//           <HexagonCard
//             excerpt={firstCardExcerpt}
//             onOpenModal={openModal}
//             fullContent={firstCardFullContent}
//             className=" w-[350px] h-[350px] z-10"
//             style={isLargeScreen ? { top: '-14%', left: '-20%' }: {}}
//             >
//           </HexagonCard>
//         </div>
//         <div className={`flex ${isLargeScreen ? 'absolute inset-0 justify-around items-center' : 'flex-col'}`}>
//           <HexagonCard
//             excerpt={secondCardExcerpt}
//             onOpenModal={openModal}
//             fullContent={secondCardFullContent}
//             className="absolute w-[350px] h-[350px] z-20"
//             style={isLargeScreen ? { top: '-14%', left: '22%' }: {}}
//           >
//           </HexagonCard>
//         </div>
//         <div className={`flex ${isLargeScreen ? 'absolute inset-0 justify-around items-center' : 'flex-col'}`}>
//           <HexagonCard
//             excerpt={thirdCardExcerpt}
//             onOpenModal={openModal}
//             fullContent={thirdCardFullContent}
//             className="absolute w-[350px] h-[350px] z-30"
//             style={isLargeScreen ? { top: '55%', left: '1%' }: {}}
//           >
//             <p className="text-lg text-center">
//               {/* At Digital Paygo, we believe in the power of collaborative partnerships and a shared approach to technology development and delivery which eliminates barriers to financial inclusion and is vital to digital ecosystem growth. */}
//             </p>
//           </HexagonCard>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Why