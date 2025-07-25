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

  return (
    <>
      <Navbar/>
      <Coffeebg/>
      {/* <Cards/> */}
      
      <div className='flex  flex-col p-20 gap-8'>
          <Content/>
          <div className='flex justify-center items-center w-full gap-10 '>
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
      <div className='flex justify-center'>
          <IoIosRadioButtonOn className='text-primaryColor-600 w-12 h-12' /><IoIosRadioButtonOff className='text-primaryColor-600 w-9 h-9'/>
      </div>
      <About/>
      <div className='grid grid-cols-3 justify-between gap-10 p-12'>
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
        <img src="coffeeroom.jpg" alt="" className='h-[50rem] w-[62rem]' />
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
      <div className='bg-[url(map.jpg) opacity-5]  gap-10 grid grid-cols-2 justify-between items-center p-28'>
        <div className='flex flex-col gap-8'>
            <div>
                  <h1 className='font-bold text-2xl text-primaryColor-600'>Contact Us</h1> 
                  <p className='font-bold text-4xl'>Say Hello</p> 
            </div>
          
            <div className='flex gap-3'>
              <div className='border-1 w-[4.5rem] h-[4.5rem] text-black rounded-[36px] border-dashed  flex justify-center items-center'>

                    <CiLocationOn className='w-[4rem] h-[4rem] bg-primaryColor-600 rounded-[36px] p-4'/>
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
              <div className='border-1 w-[4.5rem] h-[4.5rem] text-black rounded-[36px] border-dashed  flex justify-center items-center'>
                  <MdOutlineEmail className='w-[4rem] h-[4rem] bg-primaryColor-600 rounded-[36px] p-4'/>
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
                  <div className='border-1 w-[4.5rem] h-[4.5rem] text-black rounded-[36px] border-dashed  flex justify-center items-center'>
                      <LuPhoneCall className='w-[4rem] h-[4rem] bg-primaryColor-400 rounded-[36px] p-2'/>
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
                      <form action="" className="flex flex-col gap-2">
                        <input className='rounded-[18px] border-1 border-primaryColor-600  h-[3rem]' type="text" placeholder='name'/>
                        <input className='rounded-[18px] border-1 border-primaryColor-600  h-[3rem]' type="text" placeholder='email'/>
                        <input className='rounded-[18px] border-1 border-primaryColor-600  h-[3rem]' type="text" placeholder='subject'/>
                        <textarea className='rounded-[18px] border-1 border-primaryColor-600 h-[5rem]' type="text" placeholder='message'/>
                        <button></button>
                      </form>
          </div>
      </div>
    </>
  )
}

export default App
