import {v2 as cloudinary} from 'cloudinary' 
      
const CloudTest = () =>{

  try {
    cloudinary.config({ 
        cloud_name: 'dajtmxup1', 
        api_key: '951522888977616', 
        api_secret: 'HmqajmT2fNUSVrkHAYGcHPQeR3o' 
      });

  cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

  console.log((cloudinary.config));
  } catch (error) {
    console.log(error);
  }


}

export default CloudTest;
    