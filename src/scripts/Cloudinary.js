function CreateCloud() {
    const cloud = new Cloudinary();
    cloud.config ={ 
        cloud_name: 'dajtmxup1', 
        api_key: '951522888977616', 
        api_secret: 'HmqajmT2fNUSVrkHAYGcHPQeR3o' 
        };
    
    return cloud;
};

export const Cloudinary = gloabalThis.Cloudinary || CreateCloud();
globalThis.Cloudinary = Cloudinary;


