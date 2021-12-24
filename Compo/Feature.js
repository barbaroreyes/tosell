import React from 'react'
import styles from '../styles/Featured.module.css';
import Image from  'next/image'
const Featured= () => {
    const images = [
        '/img/fondo-de-pantalla.jpeg',
        '/img/gargantilla.jpeg',
        '/img/Argolla.jpeg'

    ]
  return (
    <div className ={styles.container}>
        <div className ={styles.arrowContainer}>
        <Image src='/img/arrowright.png' alt ='' width='32' height='32' /> 
        </div>
    
       <div className ={styles.wraper}>
           <div className ={styles.imageContainer}>
            {images.map((item,i)=>{
                return (
                    <Image key={i} src={item} alt ='' layout='fill'/> 
                )
            })}
           </div>

       </div>
       <div className ={styles.arrowContainer}>
       <Image src='/img/arrowleft-2.png' alt ='' layout='fill'/> 

       </div>
       
      </div>
  )
}

export default Featured
