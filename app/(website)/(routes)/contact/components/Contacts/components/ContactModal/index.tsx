
'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import UserForm from '../ContactSupportModal/component/UserForm';
import AnimatedTextWord from '@/components/AnimatedTextWord';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalType: 'sales' | 'support';
}

const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose, modalType }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent click inside the modal from closing it
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
    }
    return () => {
      document.body.style.overflow = 'unset'; // Enable scrolling when modal is closed or component is unmounted
    };
  }, [isOpen]); // Effect dependencies include isOpen to handle both opening and closing of the modal

  // Using createPortal to render the modal into the body element
  return isOpen ? createPortal(
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10000]" onClick={onClose}>
      <div className="h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 w-[700px] flex-col flex justify-center rounded-2xl" onClick={stopPropagation}>
        <div>
          <Button onClick={onClose} className="float-right pt-2">
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div> 
        <div className="text-center">
          {modalType === 'support' && (
              <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-4 w-full lg:max-w-lg mx-auto">
              <AnimatedTextWord text="Got Questions?" />
            </h2>
          )}
          {modalType === 'sales' && (
              <h2 className="font-bold text-[28px]/[30px] lg:text-[50px]/[60px] md:text-4xl text-center mb-4 w-full lg:max-w-lg mx-auto">
              <AnimatedTextWord text="Let's Connect" />
            </h2>
          )}
          <p className="mb-4 font-semibold">Keen to chat? Catch us live during business hours (8am-5pm on weekdays)</p>
        </div>
        <div className='flex justify-center py-2'>
          <a href={process.env.NEXT_PUBLIC_WHATAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded-full">
            Chat on WhatsApp
          </a>
        </div>
        {modalType === 'support' && (
          <>
            <div className='flex justify-center py-2'>
              <p>Or</p>
            </div>
            <div className='flex justify-center py-2'>
              <p className='font-bold'>Log a Query</p>
            </div>
            <div className='mt-4'>
              <UserForm />
            </div>
          </>
        )}
      </div>
    </div>,
    document.body // Target container is the body element
  ) : null;
}

export default ContactModal;
