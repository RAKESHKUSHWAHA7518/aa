import React, {useRef, useState } from 'react'
import'./Image.css'
import default_image from'../assets/default_image.svg'

const Image = () => {

const[image_url,setImage_url]=useState("/");
let inputRef = useRef(null);

const [loading,setLoading]= useState(false);

const image = async()=>{
    if (inputRef.current.value==="") {
        return 0;
    }

    setLoading(true);
    const response = await fetch(
        // 'https://api.bannerbear.com/v2/images',
        // 'https://api.gooey.ai/v2/DeforumSD/',
        // 'https://text-to-image7.p.rapidapi.com/?prompt=a%20detailed%20oil%20painting%20of%20a%20happy%20corgi%20sliding%20down%20a%20slide%2C%20digital%20art',
        // 'https://openai37.p.rapidapi.com/generate-image',
        // 'https://openai37.p.rapidapi.com/chat-completion',
         " https://api.openai.com/v1/images/generations",
        // 'https://image-generator-using-text-descriptions-fast-cheap3.p.rapidapi.com/v1/inference/runwayml/stable-diffusion-v1-5',
        {
           method:"POST",
           headers:{
            "Content-Type": "application/json",
           Authorization:
           ' Bearer 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',
         
            "User-Agent":"Chrome",
           },
           body: JSON.stringify({
            prompt:`${inputRef.current.value}`,
            n:1,
            size:"512x512",
           }),
        }
    );
   let data= await response.json() ;
  console.log(data);
   let data_array = data.data;
   setImage_url(data_array[0].url);
setLoading(false);
};

  return (
    <div className='ai-image-generator'>
      <div className="header"> Ai<span> Image Generator</span> Ai</div>
      <div className="img-loading">
      <div className="image"><img src={image_url==="/"?default_image:image_url} alt=""/></div>
      <div className="loading">
        <div className={loading?"loading-bar-full":"loading-bar"}></div>
        <div className={loading?"loading-text":"display-none"}>Loading....</div>
      </div>
    </div>
    <div className="search-box">
      <input className="search-input" type="text"  ref={inputRef} placeholder='Describe what you want to see'/>
        <div className="generate-btn" onClick={()=>{image()}}>Generate</div>
    </div>
    </div>
  )
}

export default Image
