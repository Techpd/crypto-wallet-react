import React, { useState, useEffect } from 'react';
import Overlay from './components/Overlay';
import Header from './components/Header';
import Bitcoin from './components/Bitcoin';
import Graph from './components/Graph';
import { Buysell } from './components/Buysell';
// footer icons
import Footer from './components/Footer';

function App() {
  const [isActive, settoggleClass] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (evt) => {
      if (!evt.target.closest(".navbar") && !evt.target.closest(".header__menu_dots")) {
        document.body.classList.remove("overflow-hidden");
        document.querySelector(".navbar").classList.remove("active");
        settoggleClass(false);
      }
    };

    const handleMenuDotsClick = () => {
      document.body.classList.toggle("overflow-hidden");
      document.querySelector(".navbar").classList.toggle("active");
      settoggleClass((prev) => !prev);
    };

    document.body.addEventListener("click", handleOutsideClick);
    document.querySelector(".header__menu_dots").addEventListener("click", handleMenuDotsClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
      document.querySelector(".header__menu_dots").removeEventListener("click", handleMenuDotsClick);
    };
  }, []);


  return (
    <>
      <Header />
      <Overlay className={isActive ? 'active' : ''} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Bitcoin />
            <Graph />
            <div className="buysell-wrapper">
              <Buysell BuysellText="Buy BTC" className="buybtc" />
              <Buysell BuysellText="Sell BTC" className="sellbtc" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
