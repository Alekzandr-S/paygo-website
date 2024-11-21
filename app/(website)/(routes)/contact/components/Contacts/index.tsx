import { Card } from '@/components/ui/card'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col gap-4 pb-8 pt-8 lg:pb-24 lg:grid lg:grid-cols-2 px-16'>
      <Card className='rounded-3xl flex flex-col dark:bg-background bg-[#922790] pb-8'>
        <motion.div
            className='p-12'
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            >
              <svg 
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" 
                x="0" 
                y="0" viewBox="0 0 32 32"  
                width="50" 
                height="50"
              >
                <path fill='currentColor' d="M22.969 31.818c-3.438 0-7.908-2.857-13.918-8.868C2.361 16.26-.423 11.479.292 7.905c.779-3.897 5.188-6.875 5.375-7a1 1 0 0 1 1.262.125L14 8.101a.999.999 0 0 1 0 1.414l-3.177 3.177c.251.501 1.092 1.809 3.884 4.601s4.1 3.633 4.602 3.884L22.485 18a1.03 1.03 0 0 1 1.414 0l7.071 7.071a1 1 0 0 1 .125 1.262c-.125.188-3.104 4.596-7 5.375-.363.073-.738.11-1.126.11zM6.125 3.053c-1.139.9-3.412 2.944-3.872 5.244-.556 2.78 2.207 7.234 8.212 13.239 6.005 6.005 10.456 8.767 13.239 8.212 2.299-.46 4.344-2.733 5.243-3.872l-5.754-5.754-2.828 2.829c-.732.733-2.096.732-7.071-4.243-2.119-2.118-3.513-3.769-4.145-4.906-.537-.965-.569-1.694-.098-2.165l2.829-2.829-5.755-5.755z" />
                <path fill='currentColor' className="st0" d="M29.964 16.002a1 1 0 0 1-.996-.93c-.452-6.41-5.627-11.587-12.038-12.039a1 1 0 1 1 .141-1.995c7.399.522 13.37 6.496 13.891 13.894A1 1 0 0 1 30.035 16l-.071.002z"/>
                <path fill='currentColor' className="st0" d="M23.937 15.992a1 1 0 0 1-.991-.875 6.985 6.985 0 0 0-6.069-6.063.999.999 0 1 1 .248-1.984 8.983 8.983 0 0 1 7.806 7.797 1 1 0 0 1-.994 1.125zM5.87 12.146c-.361 0-.71-.196-.889-.539-.805-1.55-.862-2.442-.768-2.917.124-.617.491-1.31 1.093-2.059a1 1 0 0 1 1.559 1.253c-.541.673-.663 1.06-.69 1.196.004 0-.001.485.581 1.606a1.002 1.002 0 0 1-.886 1.46z"/></svg>
          </motion.div>
          <div className='flex-grow flex flex-col'>
            <motion.div
                className='pb-7 ml-12'
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                exit="hidden"
              >
                <h3 className='text-2xl font-bold'>Mobile</h3>
            </motion.div>
            <motion.div
                className='flex pl-12'
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                exit="hidden"
              >
                <p className='pb-9'>
                  <span className='underline'>+260950551919,</span>
                </p>
              </motion.div>
              <motion.div
                className='flex pl-12'
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                exit="hidden"
              >

                <p className='pb-9'>
                  <span className='underline'>+260779292198,</span>
                </p>
              </motion.div>
              <motion.div
                className='flex pl-12'
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                exit="hidden"
              >
                <p className='pb-9'>
                  <span className='underline'>+260761000528,</span>
                </p>

              </motion.div>
              <motion.div
                className=' ml-12'
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                exit="hidden"
              >
                <p className='pb-4'>Or Chat with us on 
                
                </p>
                <div className='flex flex-row gap-2 items-center'>
                  <svg height="30" className="flex flex-row gap-2 items-center fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill='currentColor'
                  >
                    <path d="M373.295,307.064c-6.37,-3.188 -37.687,-18.596 -43.526,-20.724c-5.838,-2.126 -10.084,-3.187 -14.331,3.188c-4.246,6.376 -16.454,20.725 -20.17,24.976c-3.715,4.251 -7.431,4.785 -13.8,1.594c-6.37,-3.187 -26.895,-9.913 -51.225,-31.616c-18.935,-16.89 -31.72,-37.749 -35.435,-44.126c-3.716,-6.377 -0.397,-9.824 2.792,-13c2.867,-2.854 6.371,-7.44 9.555,-11.16c3.186,-3.718 4.247,-6.377 6.37,-10.626c2.123,-4.252 1.062,-7.971 -0.532,-11.159c-1.591,-3.188 -14.33,-34.542 -19.638,-47.298c-5.171,-12.419 -10.422,-10.737 -14.332,-10.934c-3.711,-0.184 -7.963,-0.223 -12.208,-0.223c-4.246,0 -11.148,1.594 -16.987,7.969c-5.838,6.377 -22.293,21.789 -22.293,53.14c0,31.355 22.824,61.642 26.009,65.894c3.185,4.252 44.916,68.59 108.816,96.181c15.196,6.564 27.062,10.483 36.312,13.418c15.259,4.849 29.145,4.165 40.121,2.524c12.238,-1.827 37.686,-15.408 42.995,-30.286c5.307,-14.882 5.307,-27.635 3.715,-30.292c-1.592,-2.657 -5.838,-4.251 -12.208,-7.44m-116.224,158.693l-0.086,0c-38.022,-0.015 -75.313,-10.23 -107.845,-29.535l-7.738,-4.592l-80.194,21.037l21.405,-78.19l-5.037,-8.017c-21.211,-33.735 -32.414,-72.726 -32.397,-112.763c0.047,-116.825 95.1,-211.87 211.976,-211.87c56.595,0.019 109.795,22.088 149.801,62.139c40.005,40.05 62.023,93.286 62.001,149.902c-0.048,116.834 -95.1,211.889 -211.886,211.889m180.332,-392.224c-48.131,-48.186 -112.138,-74.735 -180.335,-74.763c-140.514,0 -254.875,114.354 -254.932,254.911c-0.018,44.932 11.72,88.786 34.03,127.448l-36.166,132.102l135.141,-35.45c37.236,20.31 79.159,31.015 121.826,31.029l0.105,0c140.499,0 254.87,-114.366 254.928,-254.925c0.026,-68.117 -26.467,-132.166 -74.597,-180.352" id="WhatsApp-Logo"/></svg>
                  <span className='underline'>+260950358365</span>
                </div>
            </motion.div>
          </div>
        </Card>
        <Card className='rounded-3xl flex flex-col dark:bg-background bg-[#922790]'>
          <motion.div
              className='m-12'
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                  className=" fill-current" 
                  width="50" 
                  height="50" 
                  viewBox="0 0 24 24" 
                  // stroke-width="1.5" 
                  stroke="#000000"
                  fill="currentColo" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="currentColor"/>
                <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="currentColor"/>
                <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="currentColor"/>
                <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="currentColor"/>
                <path d="M12 7l0 4" fill="currentColor"/>
                <path d="M6.7 17.8l2.8 -2" fill="currentColor"/>
                <path d="M17.3 17.8l-2.8 -2" fill="currentColor"/>
              </svg>
          </motion.div>
          <div className='flex-grow flex flex-col '>  
          <motion.div
              className='pb-7 pl-12'
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
            >
              <h3 className='text-2xl font-bold'>Social Media</h3>
          </motion.div>  
          <motion.div
              className='pb-7 pl-12'
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              exit="hidden"
            >
              <p className=''>Reach us through any of our verified social media pages. </p> 
          </motion.div>
          <motion.div
            className='pl-12 pb-12 flex flex-grow flex-row gap-7'
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
          >
              <a href="https://www.twitter.com/digital_paygo" target="_blank" rel="noopener noreferrer" className='w-9 h-9'>
                <svg xmlns="http://www.w3.org/2000/svg"
                  height='30'
                  width='30'
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                ><g
                  clip-path="url(#clip0_1_2)"
                >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/></g></svg>
              </a>
              <a href="https://www.instagram.com/paygozm" target="_blank" rel="noopener noreferrer" className='w-9 h-9 pb-5'>
                <svg
                  height='30'
                  width='30'
                  className="fill-current" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://zm.linkedin.com/company/digital-shared-services-limited" target="_blank" rel="noopener noreferrer" className='w-9 h-9'>
                <svg
                  className="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                  height='30'
                  width='30'
                  version="1.1"
                  viewBox="0 0 512 512"
                >
                  <path fill='currentColor' d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z" className="fill-rule:nonzero;"/></svg>
              </a>
              <a href="https://www.facebook.com/digitalpaygozm?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className='w-12 h-12'>
                <svg
                  className="fill-current"
                  height='35'
                  width='35'
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                </svg>
              </a>
          </motion.div>
          </div>            
        </Card>
    </div>
  )
}

export default Contacts