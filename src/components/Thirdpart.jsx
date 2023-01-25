import React from 'react';
import img3 from '../assets/image3.png';
import name3 from '../assets/nameimage2.png';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../styles/color.scss";

const Thirdpart = () => {
  return (
    <div className='thirddiv'>
      
      <img fluid src={img3} className="imagethree" alt="Third"/>
           
              <img src={name3} className="name" alt="Third Name"/>
              <br/>
            
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

export default Thirdpart;