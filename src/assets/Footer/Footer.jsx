import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <p className="footer__clause">&copy; 2016 MoGo free PSD template by <span className="">Laaqiq</span></p>
      <form className="footer__form">
        <input className="form__input" type="email" name="email" placeholder="Your Email..."/>
        <button className="form__submit">Subscribe</button>
      </form>
    </div>      
  );
}

export default Footer;
