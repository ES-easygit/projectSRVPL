import React from 'react';
import img2 from '../assets/image2.png';
import name2 from '../assets/nameimage2.png';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../styles/color.scss";

const Secondpart = () => {
  return (
  
    <div className='seconddiv'>

<img thumbnail src={img2} className="imagetwo" alt="First"/>
           
<img src={name2} className="name" alt="First Name"/> <br/>
              <ReactReadMoreReadLess 
              readMoreClassName= 'readMoreClassName'
              charLimit={200}
              readMoreText = 'See More ->'
              readLessText = 'See Less ^'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor deleniti porro laborum minus expedita possimus unde illum labore, odio eos repellat maxime dolorum veniam incidunt excepturi architecto alias aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor deleniti porro laborum minus expedita possimus unde illum labore, odio eos repellat maxime dolorum veniam incidunt excepturi architecto alias aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor deleniti porro laborum minus expedita possimus unde illum labore, odio eos repellat maxime dolorum veniam incidunt excepturi architecto alias aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor deleniti porro laborum minus.
              </ReactReadMoreReadLess>
    </div>
    
  );
};

export default Secondpart;