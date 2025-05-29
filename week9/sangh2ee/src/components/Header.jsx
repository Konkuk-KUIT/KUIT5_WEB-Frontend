import React from "react";

const Header = () => {
    return (
     <section className="post-header">
       <header>
           <div className="location">
               <button type="button">
                   <span className="location">군자동</span>
               </button>
               <button type="button">
                   <img src={'./assets/expand_arrow_down.svg'} alt="expand arrow" />
               </button>
           </div> 
               <div className="post-header__icon-container">
               <button type="button">
                   <img src={'./assets/search.svg'} alt="search product" />
               </button>
               <button type="button">
                   <img src={'./assets/menu.svg'} alt="go back menu" />
               </button>
               <button type="button">
                   <img src={'./assets/notification.svg'} alt="notification" />
               </button>
           </div>
     </header>
     </section>
    );
   };

   
export default Header;