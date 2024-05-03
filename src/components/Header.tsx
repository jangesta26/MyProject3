import brandLogo from '../assets/assets/img/header/logo.svg';
import heroImg from '../assets/assets/img/hero/img.png';
import FaClinicMedical from '../assets/assets/icons/services/icon-1.svg';
import FaPregnancySupp from '../assets/assets/icons/services/icon-2.svg';
import FaNutrionalSupp from '../assets/assets/icons/services/icon-3.svg';
import FaPharmaCare from '../assets/assets/icons/services/icon-4.svg';
import FaTestimonial from '../assets/assets/img/testimonials/img.png';
import FaDoctor1 from '../assets/assets/img/team/doctor-1.png';
import FaDoctor2 from '../assets/assets/img/team/doctor-2.png';
import FaDoctor3 from '../assets/assets/img/team/doctor-3.png';
import FaDoctor4 from '../assets/assets/img/team/doctor-4.png';

// react icons
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown  } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest  } from "react-icons/fa";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import { useState } from 'react';
import { Accordion } from './Accordion';

export const Header = () => {


  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsToggleMenuOpen(!isToggleMenuOpen);
  }

  const mobileNavItem = [
        {link: "Home", path: "/home"},
        {link: "Doctors", path: "/doctors"},
        {link: "Department", path: "/department"},
        {link: "Services", path: "/services"},
        {link: "Blog", path: "/blog"},
        {link: "Contact", path: "/contact"},
  ];

  const desktopNavItem = [
    {link: "Home", path: "/home"},
    {link: "Doctors", path: "/doctors"},
    {link: "Department", path: "/department"},
    {link: "Services", path: "/services"},
    {link: "Blog", path: "/blog"},
];
  


  return (
    <>
    <header className='py-8 lg:pt-6 lg:pb-14 bg-white xl:sticky xl:-top-[100px]'>
        <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between
            gap-y-4 lg:gap-y-0'>
            {/* Brand Logo */}
            <div className='flex justify-center lg:justify-normal'>
                <a href="#something">
                <img src={brandLogo} alt="" />
                </a>
            </div>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
                {/* Location */}
                <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <ImLocation2 className='text-2xl text-accent'/>
                <div className='text-secondary'>Davao City, Philppines</div> 
                </div>
                {/* Phone */}
                <div className='flex justify-center items-center gap-x-2 lg:justify-normal'>
                <FaPhone className='text-2xl text-accent'/>
                <div className='text-secondary'>(+63) 912 3456 789</div>
                </div>

                {/* btn */}
                <button className='btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0'>Book Now</button>
                
                {/* mobile nav */}
                <nav className={`mnav bg-white ${isToggleMenuOpen ? "fixed w-[300px] top-0 h-screen left-0 shadow-2xl lg:hidden transition-all duration-300 z-20" : "fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20"}`}>
                  {/* nav toggle btn */}
                  <div className='mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8
                  flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer
                  transition-all'>
                    <button onClick={toggleMenu}>
                      {
                       isToggleMenuOpen ?( <IoIosArrowBack className='mnav__close-btn-icon text-2xl text-white'/> ) : ( <IoIosArrowForward className='mnav__close-btn-icon text-2xl text-white'/> )
                      }
                    </button>
                  </div>

                  {/* logo, list, form */}
                  <div className='px-12 flex flex-col gap-y-12 h-full'>
                    <a href="#something">
                      <img src={brandLogo} alt="" />
                    </a>
                    {/* list */}
                    <ul className='flex flex-col gap-y-5'>
                      {
                        mobileNavItem.map(({link, path}) => 
                        <li>
                          <a href={path} className='text-secondary hover:text-accent transition-all duration-300'>
                            {link}
                          </a>
                        </li>
                        )
                      }
                    </ul>

                    {/* form */}
                    <form className='relative flex gap-x-[10px]'>
                      <label htmlFor="mnav-search-input">
                        <CiSearch className='text-2xl text-accent' />
                      </label>
                      <input 
                      type="text" 
                      id='mnav-search-input' 
                      placeholder='Search...'
                      className='search-btn'
                      />
                    </form>
                  </div>
                </nav>

                {/* desktop nav */}
                <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1
                h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]'>
                  <ul className='flex gap-x-4'>
                      {
                        desktopNavItem.map(({link, path}) => 
                        <li>
                          <a href={path} className='border-r pr-4 text-secondary hover:text-accent transition-all duration-300'>
                            {link}
                          </a>
                        </li>
                        )
                      }
                       <li>
                          <a href="/contact" className='pr-4 text-secondary hover:text-accent transition-all duration-300'>
                            Contact
                          </a>
                        </li>
                  </ul>

                  {/* form */}
                  <form className='relative flex gap-x-[10px]'>
                      <label htmlFor="searh-input" className='flex justify-center items-center group'>
                        <CiSearch className='text-2xl text-accent' />
                      </label>
                      <input 
                      type="text" 
                      id='search-input' 
                      placeholder='Search...'
                      className='outline-none w-[100px] border-b-2 focus:w-[180px] focus:border-b-2
                      focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150'
                      />
                  </form>
                </nav>
            </div>
        </div>
    </header>

    {/* hero section */}
    <section className='hero bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        {/* text & image */}
        <div className='flex flex-col xl:flex-row items-center justify-between h-full'>
        
          {/* text */}
          <div className='hero__text xl:w-[48%] text-center xl:text-left'>
            {/* badge */}
              <div className='flex items-center bg-white py-[10px] w-max px-[20px] gap-x-2
              mb-[26px] rounded-full mx-auto xl:mx-0'>
                {/* badge icon */}
                <LiaHeartbeatSolid  className='text-2xl text-accent'/>
                <div className='uppercase text-base font-medium text-[#9ab4b7]
                tracking-[2.24px]'>
                  Live your life
                  </div>
              </div>
              {/* title */}
              <h1 className='h1 mb-6'>We care about your health</h1>
              {/* description */}
              <div className='mb-[42px] md:max-w-xl'>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat 
              consequat.</div>
              <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>Contact us</button>
          </div>

          {/* image */}
          <div className='hero__img hidden xl:flex max-w-[814px] seld-end'>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* end hero section */}

    {/* section stats */}
    <section className='stats section'>
      <div className='container mx-auto '>
        {/* wrapper */}
        <div className='flex flex-col xl:flex-row gap-y-6 justify-between'>
          {/* item 1*/}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              +5001
            </div>
            <div>Happy Patients</div>
          </div>
          {/* item 2*/}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              24
            </div>
            <div>Total Branches</div>
          </div>
          {/* item 3*/}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              +48
            </div>
            <div>Senior Doctors</div>
          </div>
          {/* item 4*/}
          <div className='stats__item flex-1 flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              +15
            </div>
            <div>Years Experience</div>
          </div>
        </div>
      </div>
    </section>  

    {/* services */}
    <section className='services'>
      {/* backgorund */}
      <div className='bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto
      rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center
      xl:items-start -z-10'>
        <div className='container mx-auto'>
          {/* text */}
          <div className='services__top flex items-center flex-col xl:flex-row xl:mb-[60px]'>
            <h2 className='h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left'>Our best services for your solutions</h2>
            <p className='text-white flex-1 text-center xl:text-left max-w-2xl
            xl:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. 
              Nisi lacus sed viverra tellus in hac habitasse.</p>
          </div>
        </div>
      </div>
      {/* grid container */}
      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
          {/* grid item */}
          <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2
          min-h-[288px] flex flex-col items-center text-center'>
            {/* grid item icon */}
            <div className='mb-[15px]'>
                <img src={FaClinicMedical} alt="" />
            </div>
            {/* grid item title */}
            <h3 className='h3 mb-[10px]'>General Practitioners</h3>
            {/* grid item description */}
            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2
          min-h-[288px] flex flex-col items-center text-center'>
            {/* grid item icon */}
            <div className='mb-[15px]'>
                <img src={FaPregnancySupp} alt="" />
            </div>
            {/* grid item title */}
            <h3 className='h3 mb-[10px]'>Pregnancy Support</h3>
            {/* grid item description */}
            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2
          min-h-[288px] flex flex-col items-center text-center'>
            {/* grid item icon */}
            <div className='mb-[15px]'>
                <img src={FaNutrionalSupp} alt="" />
            </div>
            {/* grid item title */}
            <h3 className='h3 mb-[10px]'>Nutritional Support</h3>
            {/* grid item description */}
            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
          <div className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2
          min-h-[288px] flex flex-col items-center text-center'>
            {/* grid item icon */}
            <div className='mb-[15px]'>
                <img src={FaPharmaCare} alt="" />
            </div>
            {/* grid item title */}
            <h3 className='h3 mb-[10px]'>Pharmaceutical Care</h3>
            {/* grid item description */}
            <p className='font-light leading-normal max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {/* end grid item */}
        </div>
      </div>
    </section>
    {/* end services */}

    {/* appointment */}
    <section className="appointment section">
      <div className="container mx-auto">
        {/* title */}
        <h2 className='appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left'>Book appointment or call: 
        <span className='text-accent-tertiary'>(+63) 123 4567 890</span>
        </h2>
        {/* form */}
        <form className='appointment__form flex flex-col gap-y-5'>
          {/* select wrapper*/}
          <div className='flex flex-col xl:flex-row gap-5'>
            {/* seclect 1 */}
            <div className='select relative flex items-center'>
              {/* icon */}
              <div className='absolute right-4'>
                <IoIosArrowDown className='text-[26px] text-primary'/>
              </div>
              {/* select */}
              <select className='appearance-none outline-none h-full w-full bg-transparent px-4'>
                <option value='1'>Select department</option>
                <option value='2'>department 1</option>
                <option value='3'>department 2</option>
                <option value='4'>department 3</option>
              </select>
            </div>
            {/* seclect 2 */}
            <div className='select relative flex items-center'>
              {/* icon */}
              <div className='absolute right-4'>
                <IoIosArrowDown className='text-[26px] text-primary'/>
              </div>
              {/* select */}
              <select className='appearance-none outline-none h-full w-full bg-transparent px-4'>
                <option value='1'>Select Doctor</option>
                <option value='2'>Dr. Jan Doe</option>
                <option value='2'>Dr. Kristalle Smith</option>
                <option value='2'>Dr. Vegapunk Cyborg</option>
              </select>
            </div>
          </div>
          {/* input wrapper */}
          <div className='flex flex-col xl:flex-row gap-5'>
            <input type="text" className='input' placeholder='Full Name' />
            <input type="text" className='input' placeholder='Phone Number (+63) 123 4567 890' />
          </div>
          <div className='flex flex-col xl:flex-row gap-5'>
            <input type="date" className="input" placeholder='Full Name' />
            <input type="time"  className="input" placeholder='Phone Number (+63) 123 4567 890' />
          </div>
          {/* btn */}
          <button className='btn btn-lg btn-accent xl:self-start' type='submit'>Book an appointment</button>
        </form>
      </div>
    </section>
    {/* end appointment */}

    {/* testimonials */}
    <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12
    xl:min-h-[595px] xl:pu-0">
      <div className=" testimonial__container container mx-auto">
        <div className='flex flex-col items-center gap-x-14 xl:flex-row'>
          {/* img */}
          <div className='hidden xl:flex'>
            <img src={FaTestimonial} alt="" />
          </div>
          {/* slider */}
          <div className='max-w-[98%] xl:max-w-[710px]'>
            {/* <!-- Slider main container --> */}
            <div className="h-[450px] mx-auto flex">
            {/* Additional required wrapper */} 
            <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
               
                {/* Slides 1 */} 
                <SwiperSlide className="swiper-slide">
                  <div className='h-full flex flex-col justify-center items-start'>
                    <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                      <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%]
                      text-center xl:text-left before:bg-qouteLeft before:bg-contain before:bg-bottom
                      before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                      after:bg-qouteRight after:bg-contain after:bg-bottom after:inline-block 
                      after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                        {/* message */}
                        <span className='mx-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Semper quis lectus ut venenatis tellus.
                        </span>
                      </p>
                      {/* name */}
                      <div className='text-[26px] text-[#4c5354] font-semibold'>Max Zackerb</div>
                      {/* job */}
                      <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>Customer</div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slides 1 */} 
                <SwiperSlide className="swiper-slide">
                  <div className='h-full flex flex-col justify-center items-start'>
                    <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                      <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%]
                      text-center xl:text-left before:bg-qouteLeft before:bg-contain before:bg-bottom
                      before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                      after:bg-qouteRight after:bg-contain after:bg-bottom after:inline-block 
                      after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                        {/* message */}
                        <span className='mx-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Semper quis lectus ut venenatis tellus.
                        </span>
                      </p>
                      {/* name */}
                      <div className='text-[26px] text-[#4c5354] font-semibold'>Max Zackerb</div>
                      {/* job */}
                      <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>Customer</div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slides 1 */} 
                <SwiperSlide className="swiper-slide">
                  <div className='h-full flex flex-col justify-center items-start'>
                    <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                      <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%]
                      text-center xl:text-left before:bg-qouteLeft before:bg-contain before:bg-bottom
                      before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                      after:bg-qouteRight after:bg-contain after:bg-bottom after:inline-block 
                      after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                        {/* message */}
                        <span className='mx-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Semper quis lectus ut venenatis tellus.
                        </span>
                      </p>
                      {/* name */}
                      <div className='text-[26px] text-[#4c5354] font-semibold'>Max Zackerb</div>
                      {/* job */}
                      <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>Customer</div>
                    </div>
                  </div>
                </SwiperSlide>
               
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end testimonials */}

    {/* team */}
    <section className="team section">
      <div className="container mx-auto">
        {/* title */}
        <h2 className='team__title h2 mb-[50px] text-center xl:text-left'>Our Team</h2>
        {/* slider */}
        <div className='team__slider swiper min-h-[400px]'>
            {/* <!-- Slider main container --> */}
            <Swiper 
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper sm:h-[700px] xl:h-[450px] h-[1400px]"
            >
            {/* slide 1 */} 
                <SwiperSlide className='swiper-slide'>
                  <div className='flex flex-col md:flex-row gap-9'>
                    {/* item 1*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <img src={FaDoctor1} alt="" />
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Zenny Ramos</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Pediatrician</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                    {/* item 2*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <img src={FaDoctor2} alt="" />
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Albert Chua</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Cadiologist</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            {/* slide 2 */} 
                <SwiperSlide className='swiper-slide'>
                  <div className='flex flex-col md:flex-row gap-9'>
                    {/* item 1*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <img src={FaDoctor3} alt="" className='h-[335px] w-[310px] rounded-xl'/>
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Marco Chua</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Orthodontist</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                    {/* item 2*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <img src={FaDoctor4} alt="" className='h-[335px] w-[310px] rounded-xl'/>
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Rhea Swift</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Prosthodontist</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
    {/* end team */}

    {/* faq */}
    <section className="faq">
      <div className="container mx-auto">
        <h2 className='faq__title h2 text-center mb-[50px]'>We've got answer</h2>
          {/* item */}
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
        </div>
    </section>
    {/* end faq */}

    {/* departments */}
    <section className='departments'>

    </section>
    {/* end departments */}
    {/* temp div */}
    <div className='h-[4000px]'></div>
    </>
  )
}

