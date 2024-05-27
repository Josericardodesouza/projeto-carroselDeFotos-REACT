import {useState, useEffect , useRef} from 'react'
import { motion } from 'framer-motion'
import './App.css';
import image1 from '../src/images/1.jpg'
import image2 from '../src/images/2.jpg'
import image3 from '../src/images/3.jpg'
import image4 from '../src/images/4.jpg'
import React from 'react';


const imagens = [image1, image2, image3, image4]

function App() {
  const carrossel = useRef();
  const [width, setWidth] = useState(0)

  useEffect (() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)

    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)


  }, [])



  return (
    <div className="App">


      <motion.div ref={carrossel} className='carrossel' whileTap= {{cursor: "grabbing"}}>
        <motion.div className='inner'
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        initial = {{ x: 100}}
        animate = {{x: 0}}
        transition={{duration: 5}}
        
        >
          
          {imagens.map(image => (
           <motion.div className='item' key={image}>

              <img src={image} alt='texto alt'/>
            </motion.div>


          ))}

        </motion.div>

      </motion.div>
    
    </div>
  );
}

export default App;
