import React from "react";
import Footer from "../components/Footer/Footer";
import "../styles/disclaimer.css"; 
import DynamicHeader from "../components/Header/DynamicHeader";

const SupportPage = () => {
  const role = localStorage.getItem("userRole");
  return (
    <>
      <DynamicHeader role={role} />
    <div className="disclaimer-container">
        <div className="disclaimer-content">
        <h1>Служба підтримки</h1>      
   
        <ul className="support-list">
        <p className="support-text">
        Адреса офісу
        </p>
        <li className="support-adress"> 01010, м. Київ, вул. Левандовська, 5, оф. 9</li>
            <p className="support-text">Електрона пошта</p>
          <li className="support-adress"> <a href="mailto:support@nannybear.com">support@nannybear.com</a></li>
          <p className="support-text">Гаряча лінія</p>
          <li className="support-adress"><a href="tel:+380503104410">+38 (050) 310-44-10</a></li>
          <li className="support-adress"><a href="tel:+380503309475">+38 (050) 330-94-75</a></li>
          <li className="support-adress"><a href="tel:+3805013826246">+38 (050) 382-62-46</a></li>
          <li className="support-adress">Години роботи: Пн-Пт, 9:00 – 18:00</li>
         


        </ul>
      </div>     
    </div>
    <Footer />
    </>
  );
};

export default SupportPage;
