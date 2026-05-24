import multer from "multer";
import "dotenv/config";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import { v2 as cloudinary } from "cloudinary";

console.log(process.env.CLOUD_API_KEY)

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,

  api_key: process.env.CLOUD_API_KEY,

  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,

  params: {
    folder: "escort-project",

    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;