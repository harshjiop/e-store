


"use client";
import { ChangeEvent, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import {UploadImage} from '@/lib/Upload'
import axios from 'axios'
export default function Example() {
  const [image,setImage]=useState<File[]>([])
  const [user,setUser]=useState({
    title:'',
    author:'',
    language:'',
    page:0,
    actualPrice:0,
    sellingPrice:0,
    about:'',
    catogery:'',
    Image:{},
    description:'',
  })

  function handelFileChange(e: ChangeEvent<HTMLInputElement>): void {
   const selectedFile=e.target.files;
   if(selectedFile){
    const newImage=Array.from(selectedFile);
    setImage([...image,...newImage])
   }
  }

  const savedata=async()=>{
    console.log(user)
    // image uploding 
    if(image){
      const formData=new FormData();
      Array.from(image).forEach((file,index)=>{
        formData.append(`file[${index}]`,file);
      })
      try {
        let response = UploadImage(formData);
        const urls = (await response).map(item => item.url);
        const public_id = (await response).map(item => item.public_id);
        setUser({...user,Image:urls})
        const productresponse =await axios.post("/api/v1/users/product",user);
        console.log(productresponse)
        // console.log(urls)
        // console.log(public_id)
      } catch (error) {
        console.log(error)
        
      }
    }
  }

  return (
  
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Add Your Book
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
          <div>
            <label
            
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Book Name
            </label>
            <div className="mt-2.5">
              <input
              value={user.title}
              onChange={(e)=>setUser({...user,title:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="autherName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Auther Name
            </label>
            <div className="mt-2.5">
              <input
              value={user.author}
              onChange={(e)=>setUser({...user,author:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="langauge"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Language
            </label>
            <div className="mt-2.5">
              <input
              value={user.language}
              onChange={(e)=>setUser({...user,language:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="page"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Page
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                value={user.page}
                onChange={(e)=>setUser({...user,page:Number(e.target.value)})}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="actualPrice"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Actual Price in ₹
            </label>
            <div className="mt-2.5">
              <input
              value={user.actualPrice}
              onChange={(e)=>setUser({...user,actualPrice:Number(e.target.value)})}
                type="number"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="sellingPrice"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Selling Price in ₹
            </label>
            <div className="mt-2.5">
              <input
              value={user.sellingPrice}
              onChange={(e)=>setUser({...user,sellingPrice:Number(e.target.value)})}
                type="number"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="about"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              About Book
            </label>
            <div className="mt-2.5">
              <input
              value={user.about}
              onChange={(e)=>setUser({...user,about:e.target.value})}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="sellingPrice"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Catogery
            </label>
            <select
              value={user.catogery}
              onChange={(e) => setUser({ ...user, catogery: e.target.value })}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">-- Select --</option>
              <option value="Skills">Skills</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 3</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description Of Book
            </label>
            <div className="mt-2.5">
              <textarea
              value={user.description}
              onChange={(e)=>setUser({...user,description:e.target.value})}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <label
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Image
            </label>
            <div className="mt-2.5">
              <input
                type="file" onChange={handelFileChange} multiple
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="">
        <div>
            {image.map((image,index)=>(
              <Image 
              className=""
              src={URL.createObjectURL(image)}
              height={100}
              width={100}
              alt={`imag${index+1}`}
              />
            ))}
            
          </div>
          
          </div>

        <div className="mt-10">
          <button
          onClick={savedata}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
