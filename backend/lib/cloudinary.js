import { v2 as cloudinary } from "cloudinary";
import { ENV } from "./env.js";

cloudinary.config({
  cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
});

export default cloudinary;
  // cloud_name: dveojn1gh
    // api_key:426865394867289
    //api_secret: 3jhf-LbpTJAJ0Q3gumA6Vj8tIJY
    //CLOUDINARY_URL=cloudinary://426865394867289:3jhf-LbpTJAJ0Q3gumA6Vj8tIJY@dveojn1gh

