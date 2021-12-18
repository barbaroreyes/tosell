import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.item}>
      <div className = {styles.callButton}>
      <Image src='/img/l.m.j.6.png' alt="picture" width="40" height="40" />
        </div>
      <div className = {styles.logo}>L.M.J</div>
      
      
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
      <div className = {styles.item}>
        <div className={styles.cart}>
        <Image src='/img/cart-ui.png' alt="picture" width="40" height="40" />
        <div className = {styles.count}>2</div>
        </div>
     
      </div>
    </div>
  )
}

export default NavBar
