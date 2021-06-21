import axios from 'axios';
// const cloudinary =require("cloudinary");

// cloudinary.config({
//     cloud_name:	"dlqrols25",
//     api_key:"799487912445521",
//     api_secret:"yFN9n1YxRO4Z0J6xS7eszsvCsT0"
// })


const uploadPic=async media=>{
    try{
        const form=new FormData();
        form.append("file",media);
        form.append("upload_preset", "cht0tsmn");
        form.append("cloud_name","dlqrols25");

        const res = await axios.post("https://api.cloudinary.com/v1_1/dlqrols25/image/upload", form);
        return res.data.url;
    }
    catch(error)
    {
        return;
    }
}

export default uploadPic;