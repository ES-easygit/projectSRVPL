import React from 'react';
import "../styles/color.scss";
import img1 from '../assets/image1.png';
import name1 from '../assets/nameimage1.png';

import ReactReadMoreReadLess from "react-read-more-read-less"

const Firstpart = () => {
  return ( <div className='firstdiv'>
              <img src={img1} className="imageone" alt="First"/>
              <img src={name1} className="name" alt="First Name"/>
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

export default Firstpart;