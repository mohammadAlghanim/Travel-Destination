import React from 'react';
import './Footer.css'

function Footer(){
    return(
        <footer className='footer'>
      <p>Follow me on social media:</p>
      <ul>
        <li>
          <a href="https://twitter.com/your-twitter-handle">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/your-instagram-handle/">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/your-facebook-page/">Facebook</a>
        </li>
      </ul>
      <p>Copyright © {new Date().getFullYear()} MohammadAghanim</p>
    </footer>
    )

}

export default Footer;
