"use server"

import { writeFile } from "fs/promises";
import uniqid from "uniqid";
import {uploadOnCloudinary} from "./cloudinary"
let imageArr=  [
    {
        "asset_id": "89f0dc9caee616dd095c5491a5831768",
        "public_id": "ny29dnyw413rmhqhnnpf",
        "version": 1710416721,
        "version_id": "23222b3ac45d8dc6433bc17b81f100fb",
        "signature": "412e1978499192ae022f7c49c44a04006101a3dc",
        "width": 1920,
        "height": 1200,
        "format": "png",
        "resource_type": "image",
        "created_at": "2024-03-14T11:45:21Z",
        "tags": [],
        "bytes": 345306,
        "type": "upload",
        "etag": "28bfebb18dac2f3a8fd63188859ba4f3",
        "placeholder": false,
        "url": "http://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "secure_url": "https://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "folder": "",
        "original_filename": "the_anant.com5x0ltr5y653",
        "api_key": "799365861917675"
    },
    {
        "asset_id": "89f0dc9caee616dd095c5491a5831768",
        "public_id": "ny29dnyw413rmhqhnnpf",
        "version": 1710416721,
        "version_id": "23222b3ac45d8dc6433bc17b81f100fb",
        "signature": "412e1978499192ae022f7c49c44a04006101a3dc",
        "width": 1920,
        "height": 1200,
        "format": "png",
        "resource_type": "image",
        "created_at": "2024-03-14T11:45:21Z",
        "tags": [],
        "bytes": 345306,
        "type": "upload",
        "etag": "28bfebb18dac2f3a8fd63188859ba4f3",
        "placeholder": false,
        "url": "http://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "secure_url": "https://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "folder": "",
        "original_filename": "the_anant.com5x0ltr5y653",
        "api_key": "799365861917675"
    },
    {
        "asset_id": "89f0dc9caee616dd095c5491a5831768",
        "public_id": "ny29dnyw413rmhqhnnpf",
        "version": 1710416721,
        "version_id": "23222b3ac45d8dc6433bc17b81f100fb",
        "signature": "412e1978499192ae022f7c49c44a04006101a3dc",
        "width": 1920,
        "height": 1200,
        "format": "png",
        "resource_type": "image",
        "created_at": "2024-03-14T11:45:21Z",
        "tags": [],
        "bytes": 345306,
        "type": "upload",
        "etag": "28bfebb18dac2f3a8fd63188859ba4f3",
        "placeholder": false,
        "url": "http://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "secure_url": "https://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "folder": "",
        "original_filename": "the_anant.com5x0ltr5y653",
        "api_key": "799365861917675"
    },
    {
        "asset_id": "89f0dc9caee616dd095c5491a5831768",
        "public_id": "ny29dnyw413rmhqhnnpf",
        "version": 1710416721,
        "version_id": "23222b3ac45d8dc6433bc17b81f100fb",
        "signature": "412e1978499192ae022f7c49c44a04006101a3dc",
        "width": 1920,
        "height": 1200,
        "format": "png",
        "resource_type": "image",
        "created_at": "2024-03-14T11:45:21Z",
        "tags": [],
        "bytes": 345306,
        "type": "upload",
        "etag": "28bfebb18dac2f3a8fd63188859ba4f3",
        "placeholder": false,
        "url": "http://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "secure_url": "https://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "folder": "",
        "original_filename": "the_anant.com5x0ltr5y653",
        "api_key": "799365861917675"
    },
    {
        "asset_id": "89f0dc9caee616dd095c5491a5831768",
        "public_id": "ny29dnyw413rmhqhnnpf",
        "version": 1710416721,
        "version_id": "23222b3ac45d8dc6433bc17b81f100fb",
        "signature": "412e1978499192ae022f7c49c44a04006101a3dc",
        "width": 1920,
        "height": 1200,
        "format": "png",
        "resource_type": "image",
        "created_at": "2024-03-14T11:45:21Z",
        "tags": [],
        "bytes": 345306,
        "type": "upload",
        "etag": "28bfebb18dac2f3a8fd63188859ba4f3",
        "placeholder": false,
        "url": "http://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "secure_url": "https://res.cloudinary.com/the-anant/image/upload/v1710416721/ny29dnyw413rmhqhnnpf.png",
        "folder": "",
        "original_filename": "the_anant.com5x0ltr5y653",
        "api_key": "799365861917675"
    },
]

// let imageArr=[]
export const UploadImage=async (req)=>{
    const data = await req;
    for (const entry of data.entries()){
        const[name,value]=entry;
        const file=data.get(name)
        if(file){
            const ext=file.name.split(".").slice(-1);
            const newFileName='the_anant.com'+uniqid()+"."+ext;
            const byteData=await file.arrayBuffer();
            const buffer=Buffer.from(byteData);
            const path=`./public/${newFileName}`;
            // writeFile(path,buffer);
            // const imageUrl=await uploadOnCloudinary(path)
            // imageArr.push(imageUrl)
            // console.log(imageUrl)
        }
    }
    return imageArr;
}

export const squareNumbers = (numbers) => {
    return numbers.map(num => num * num);
  };

