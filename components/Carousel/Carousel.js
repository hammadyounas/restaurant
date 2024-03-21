import React from 'react'
import { Carousel } from 'antd';
import style from './Carousel.module.css'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carrousel = () => {
  return (
    <Carousel autoplay className={style.customCarousel}>
    <div className={style.textDiv}>
    <img src='/Assets/Carrousel/C1.jpg'  alt="App Logo" className={style['carousel-image']}/>
    
    </div>
    <div  className={style.carouselDiv}>
    <img src='/Assets/Carrousel/C2.jpg'  alt="App Logo"  className={style['carousel-image']}/>
    
    </div >
    <div  className={style.carouselDiv}>
    <img src='/Assets/Carrousel/C3.jpeg'  alt="App Logo"  className={style['carousel-image']}/>
   



    </div>
   
  </Carousel>
  )
}

export default Carrousel
