import { useState } from 'react'
import './App.css';
import Navbar from './navs/Navbar';
import Coffeebg from './view/Coffeebg';
import Card from "./cards/Card";
import Content from './content/content';

import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import About from './Aboutus/About';
import Service from './services/Service';
import Footer from './footer/Footer';
import Contact from './contact/Contact';
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import ContactFooter from './contact/ContactFooter';
import ContactForm from './contact/ContactForm';


function App() {
const Cards=[
  {
    image:"office.jpg",
    title:" Renting Offices",
    description:" Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
    more:"Learn More",
  },
   {
    image:"capcino.jpg",
    title:"Coffee Shop",
    description:" Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
    more:"Learn More",
  },
  {
    image:"garden.jpg",
    title:"Private event Space",
    description:" Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
    more:"Learn More",
  },

];

const services=[
  {

    define:"Creative Space",
    description:"Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.",
  },
  {
    define:"High Speed Wifi",
    description:"Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.",
  },
  {
    define:"Parking Area",
    description:"Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.",
  },
 
];
const links=[
  {
    title:"Quick Links",
    Home:"Home",
    space:"space",
    about:"about",
    contact:"contact",
  },
];

const catalog=[
 {
    define:" 24/7 Access",
    description:"Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.",
  },
  {
    define:"Great Location",
    description:"Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.",
  },
  {
    define:"outdoor space",
    description:"Lorem ipsum dolor sit amet, cn consectetur adipiscing elit.",
  },


];

const addresses=[
  {
    name:"Address",
    address:"Location  KG 9 Ave, Kigali",
  },
];
const Email=[
  {
    name:"Email",
    address:"businesscafe@info.com",
  },
];

const Phone=[
  {
    name:"Phone",
    address:"+250788183828",
  },
];
const info=[
  {
    title:"Contact Info",
  },
];

  return (
    <>
      <Navbar/>
      <Coffeebg/>
      {/* <Cards/> */}
      
      <div className='flex  flex-col  gap-8 w-full pl-6 pr-6  '>
          <Content/>
          <div className='grid grid-cols-1 large:grid-cols-3 justify-center items-center  gap-10  '>
            {Cards.map((Cards,index)=>(
                  <Card
                  image={Cards.image} 
                  title={Cards.title} 
                  description={Cards.description} 
                  more={Cards.more}
                  key={index}
                  >
                  </Card>
                  

            ))} 
         </div>
      </div>
      <div className='flex justify-center p-5'>
          <IoIosRadioButtonOn className='text-primaryColor-600 w-10 h-10' /><IoIosRadioButtonOff className='text-primaryColor-600
           w-10 h-10'/>
      </div>
      <About/>
      <div className='grid  grid-cols-1  md:grid-cols-3 w-full justify-between gap-10 p-12'>
          <div className='flex flex-col justify-between gap-10'>
              {services.map((services,index)=>(
                    <Service
                    define={services.define} 
                    description={services.description} 
                    key={index}
                    >
                    </Service>
              ))} 
        </div>
        <img src="coffeeroom.jpg" alt="" className='h-[50rem] ' />
        <div className='flex flex-col justify-between gap-10'>
            {catalog.map((catalog,index)=>(
                  <Service
                  define={catalog.define} 
                  description={catalog.description} 
                  key={index}
                  >
                  </Service>
            ))} 
      </div>
      </div>
      <Footer/>
      <div className='bg-[url(map.jpg) opacity-5]  gap-10 grid-cols-1 grid md:grid-cols-2 justify-between items-center p-28'>
        <div className='flex flex-col gap-8'>
            <div>
                  <h1 className='font-bold text-2xl text-primaryColor-600'>Contact Us</h1> 
                  <p className='font-bold text-5xl'>Say Hello</p> 
            </div>
          
            <div className='flex gap-3'>
              <div className='border-1 w-[5.5rem] h-[5.5rem] border-primaryColor-600 rounded-[45px] border-dashed  flex justify-center items-center'>

                    <CiLocationOn className='w-[4.5rem] h-[4.5rem] bg-primaryColor-600 rounded-[36px] p-4'/>
                  </div>
                  {addresses.map((addresses,index)=>(
                      <Contact
                      name={addresses.name} 
                      address={addresses.address} 
                      key={index}
                      >
                      </Contact>
                ))} 
            </div>
            <div className='flex gap-3'>
              <div className='border-1 w-[5.5rem] h-[5.5rem] border-primaryColor-600 rounded-[45px] border-dashed  flex justify-center items-center'>
                  <MdOutlineEmail className='w-[4.5rem] h-[4.5rem] bg-primaryColor-600 rounded-[36px] p-4'/>
              </div>
                  
                  {Email.map((Email,index)=>(
                      <Contact
                      name={Email.name} 
                      address={Email.address} 
                      key={index}
                      >
                      </Contact>
                ))} 
            </div>
            
          <div className='flex gap-3'>
                  <div className='border-1 w-[5.5rem] h-[5.5rem] border-primaryColor-600 rounded-[45px] border-dashed  flex justify-center items-center'>
                      <LuPhoneCall className='w-[4.5rem] h-[4.5rem] bg-primaryColor-600 rounded-[36px] p-2'/>
                  </div>
                  
                  {Phone.map((Phone,index)=>(
                      <Contact
                      name={Phone.name} 
                      address={Phone.address} 
                      key={index}
                      >
                      </Contact>
                  ))} 
          </div>
        </div>
        <div  className='flex flex-col justify-between gap-8'>
          <div>
            <h1 className='font-bold text-primaryColor-600'>Have Question ?</h1>
            <p className='font-bold text-4xl'>Send a Message</p>
            </div>
            <ContactForm />


                      {/* <form action="" className="flex flex-col gap-2">
                        <input className='rounded-[10px] border-1 border-primaryColor-600  h-[3rem] font-bold' type="text" placeholder='name'/>
                        <input className='rounded-[10px] border-1 border-primaryColor-600  h-[3rem] font-bold' type="text" placeholder='email'/>
                        <input className='rounded-[10px] border-1 border-primaryColor-600  h-[3rem] font-bold' type="text" placeholder='subject'/>
                        <textarea className='rounded-[10px] border-1 border-primaryColor-600 h-[5rem] font-bold' type="text" placeholder='send message'/>
                        <button className='bg-primaryColor-600 h-[3rem] w-[9rem] rounded-[10px]'><p className='font-bold text-white'>send message</p></button>
                      </form> */}
          </div>
      </div>
      <div className='border-t-1 border-b-1 border-t-primaryColor-600 border-b-primaryColor-600 grid grid-cols-1 md:grid-cols-3 justify-center gap-8  p-10 '>
       <div className='flex flex-col gap-4 '>
          <div className='flex justify-between  w-55 items-center'>
              <MdOutlineDashboard className='h-[2rem] w-[2rem] text-primaryColor-600'/>
              <h1 className='font-bold h-2rem text-2xl flex gap-2  w-48 '><strong>Business</strong><span className='text-primaryColor-600'>Cafe</span></h1>
          </div>
          <p className='font-semibold text-1xl'>Discover your ideal workspace with us. Work 
          smart, not hard in our fully-equipped office 
          spaces.</p>
          <div className='flex gap-3'>
            <div className='border-1 rounded-[36px] border-primaryColor-600 p-2'>
                <SlSocialFacebook className='h-[2rem] w-[2rem]  text-primaryColor-600'/>
            </div>
            <div className='border-1 rounded-[36px] border-primaryColor-600 p-2'>
                <SlSocialTwitter className='h-[2rem] w-[2rem]  text-primaryColor-600'/>
            </div>
              <div className='border-1 rounded-[36px] border-primaryColor-600 p-2'>
                <SlSocialLinkedin className='h-[2rem] w-[2rem]  text-primaryColor-600'/>
            </div>
                <div className='border-1 rounded-[36px] border-primaryColor-600 p-2'>
                <FaInstagram className='h-[2rem] w-[2rem]  text-primaryColor-600'/>
            </div>  
          </div>
        </div>
        
         {links.map((links,index)=>(
                      <ContactFooter
                      title={links.title} 
                      Home={links.Home} 
                      space={links.space} 
                      about={links.about} 
                      contact={links.contact} 
                      key={index}
                      >
                      </ContactFooter>
                  ))} 
          <div className='flex flex-col '>
              {info.map((info,index)=>(
                      <ContactFooter
                      title={info.title} 
                      >
                      </ContactFooter>
                  ))} 
                  <div className='flex flex-col gap-2'>
                    <div className='flex'>
                    <label className='font-bold ' htmlFor="">Location:</label>
                    <p className='font-semibold'>Kigali,<span className='text-primaryColor-600'>Rwanda</span> </p>
                    </div>
                    <div className='flex'>
                      <label className='font-bold ' htmlFor="">Email:</label>
                      <p className='font-semibold '>businesscafe@info.com</p>
                    </div>
                    <div className='flex'>
                      <label className='font-bold ' htmlFor="">Phone:</label>
                      <p className='font-semibold'>+250783787817</p>
                    </div>
                    <p className='text-primaryColor-600'>View Location on GoogleMap</p>
                  </div>
                  
          </div>

       
      </div>
      <p className='font-semibold text-[20px] text-center p-5'>Copyright © 2023 Business Coffee All rights reserved.</p>
    </>
  )
}

export default App
