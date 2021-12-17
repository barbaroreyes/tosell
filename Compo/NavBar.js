import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.item}>
      <div className = {styles.callButton}>
         <Image src='/img/cellPhone.jpeg' alt="" width="42" height="42" style={{border:'5px solid black'}}/>
        </div>
        <div className = {styles.texts}>
        <div className = {styles.text}>Order Now </div>
        <div className = {styles.text}>123 342 2432 </div>
        </div>
        </div>
      <div className = {styles.item}>
        <ul className = {styles.list}>
          <li className = {styles.listItem}>Home</li>
          <li className = {styles.listItem}>Product</li>
          <li className = {styles.listItem}>Menu</li>
          <li className = {styles.listItem}>EVENT</li>
          <li className = {styles.listItem}>BLOG</li>
          <li className = {styles.listItem}>CONTACT</li>

        </ul>
      </div>
      <div className = {styles.item}>Rigth</div>
    </div>
  )
}

export default NavBar
