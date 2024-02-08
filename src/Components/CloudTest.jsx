// import { useEffect, useState } from 'react';
// import { v2 as cloudinary } from 'cloudinary';
import { Cloudinary } from '../scripts/Cloudinary';

export default function MyPage(){
  Cloudinary.upload();
  Cloudinary.get();
}

// const CloudTest = () => {
//   // dotenv.config();
//   const [imageURL, setImageURL] = useState(null);

//   useEffect(() => {
//     cloudinary.config({ 
//       cloud_name: 'dajtmxup1', 
//       api_key: '951522888977616', 
//       api_secret: 'HmqajmT2fNUSVrkHAYGcHPQeR3o' 
//     });

//     const image = cloudinary.url('cld-sample-5',{
//       secure: true,
//       transformation: [
//         {width: 400, height: 300, crop: 'fill'}
//       ]
//     });

//     setImageURL(image);
//   }, []); 

//   return <div className="image">
//     {imageURL && <img src={imageURL} />}
//   </div>; 
// };

// export default CloudTest;