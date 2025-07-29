import React, { useState } from 'react'
import Input from './Input';
import Inputmessage from './Inputmessage';
import Button from './Button';

const ContactForm = () => {
    const [formData,setFormata]=useState({
        name:"",
        email:"",
        subject:"",
        message:"",
    });
    const [errors,setErrors]=useState({});

  const handleChange = (event) => {
    console.log(event);
    setFormata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    console.log(formData);
  };
 const handleSubmit=(event)=>{
            event.preventDefault();
            const formErrors={};


    if (!formData.name.trim()) {
      formErrors.name = "name is required";
    }
    if (!formData.subject.trim()) {
      formErrors.subject = "subject is required";
    }

    if (!formData.email.includes("@")) {
      formErrors.email = "Invalid Email address";
    }
    if (!formData.message.trim()) {
      formErrors.message = "message is required";
    }
   

   

    console.log("Errors that is being returned", formErrors);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("message sent Successful!");
      setFormata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div >
        
        <form action="" onSubmit={handleSubmit} 
        className='flex flex-col gap-3'>
                <Input 
                name={"name"}
                placeholder={"name"} 
                onChange={handleChange}
                value={formData.name}
                variant={errors.name ?"danger":"default"}/>
               {errors.firstName && (
          <p className="text-sm text-red-600">{errors.name}</p>)}

            <Input 
                placeholder={"email"} 
                name={"email"}
                type={"email"}
                 value={formData.email}
                onChange={handleChange}
                 variant={errors.email ?"danger":"default"}/>
             {errors.email && (
          <p className="text-sm text-red-600">{errors.email}</p>)}

             <Input 
                placeholder={"subject"} 
                name={"subject"}
                type={"subject"}
                 value={formData.subject}
                onChange={handleChange}
                 variant={errors.subject ?"danger":"default"}/>
             {errors.subject && (
          <p className="text-sm text-red-600">{errors.subject}</p>)}
            <Inputmessage 
                
                placeholder={"your message"} 
                message={"message"}
                onChange={handleChange}
                 value={formData.message}
                variant={errors.message ?"danger":"default"}/>
            {errors.message && (
          <p className="text-sm text-red-600">{errors.message}</p>)}
         <Button  type="submit" label={"send message"} className="w-full" />
        </form>
    </div>
  )
}

export default ContactForm
