import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import nav from "/src/assets/NAV.png";

const Nav = ({ scrollToSection }) => { // Receive scrollToSection as a prop
  return (
    <div className='nav'>
      <img src={nav} alt="" />
      <ul>
        <li>
          <button onClick={() => scrollToSection("about")} className="a">About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contacts")} className="a">Contacts</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("how-it-works")} className="a">How It Works</button>
        </li>
        <li>
         <button><Link className='a'  to={"/faqs"}>FAQs</Link></button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
