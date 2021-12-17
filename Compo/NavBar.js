import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.item}>
      <div className = {styles.callButton}>
         <Image src='/img/cellPhone.jpeg' alt="" width="32" height="32"/>
        </div>
        <div className = {styles.texts}>
        <div className = {styles.text}>Order Now </div>
        <div className = {styles.text}>123 342 2432 </div>
        </div>


      </div>
      <div className = {styles.item}>Center</div>
      <div className = {styles.item}>Rigth</div>
    </div>
  )
}

export default NavBar