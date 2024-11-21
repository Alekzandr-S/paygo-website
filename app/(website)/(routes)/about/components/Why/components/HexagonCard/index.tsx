import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Card, CardContent } from '../../../../../../../../components/ui/card';

interface ModalProps {
  content: string;
  onClose: () => void;
}

interface HexagonCardProps {
  className?: string;
  excerpt: string;
  fullContent: string;
  onOpenModal: (content: string) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg mx-auto relative" onClick={stopPropagation}>
        <button onClick={onClose} className=" absolute top-2 right-2">Close</button>
        <p className="">{content}</p>
      </div>
    </div>,
    document.body
  );
};

const HexagonCard: React.FC<HexagonCardProps> = ({ className, excerpt, fullContent, onOpenModal, style, children }) => {
  return (
    <>
      <div
        className={`relative flex bg-slate-200 dark:bg-[#852882] justify-center items-center m-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer ${className}`} // <-- Added 'cursor-pointer'
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', ...style }}
        onClick={() => onOpenModal(fullContent)} // <-- Added onClick handler
      >
        <CardContent className="flex flex-col justify-center items-center p-4">
          <p className="text-lg text-center">{excerpt}</p>
          
          <button
            className="mt-4 bg-foreground-card rounded px-4 py-2"
            onClick={() => onOpenModal(fullContent)}
          >
            Read More
          </button>
         
          {/* <-- Optionally, you can remove or comment out the 'Read More' button if the entire card is clickable */}
        </CardContent>
        {children}
      </div>
    </>
  );
};

export default HexagonCard;


// // 'use client'

// import React, { ReactNode, useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { Card, CardContent } from '../../../../../../../../components/ui/card';

// interface ModalProps {
//   content: string;
//   onClose: () => void;
// }

// interface HexagonCardProps {
//   className?: string;
//   excerpt: string;
//   fullContent: string;
//   onOpenModal: (content: string) => void;
//   style?: React.CSSProperties;
//   children?: React.ReactNode;
// }

//  export const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
//   const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//   };

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   return createPortal(
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
//       <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg mx-auto relative" onClick={stopPropagation}>
//         <button onClick={onClose} className=" absolute top-2 right-2">Close</button>
//         <p className="">{content}</p>
//       </div>
//     </div>,
//     document.body
//   );
// };

// const HexagonCard: React.FC<HexagonCardProps> = ({ className, excerpt, fullContent, onOpenModal, style, children }) => {
//   return (
//     <>
//       <div
//         className={`relative flex bg-slate-200 dark:bg-[#852882] justify-center items-center m-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${className}`}
//         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', ...style }}
//       >
//         <CardContent className="flex flex-col justify-center items-center p-4">
//           <p className="text-lg text-center">{excerpt}</p>
//           <button
//             className="mt-4 bg-foreground-card rounded px-4 py-2"
//             onClick={() => onOpenModal(fullContent)}
//           >
//             Read More
//           </button>
//         </CardContent>
//       </div>
//     </>
//   );
// };

// export default HexagonCard;
