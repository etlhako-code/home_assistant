import React from 'react';

   function Header({ Date, title }) {
     return (
       <section className="sh_header_bar">
         <span>{Date}</span>
         <div className="row">
           <div className="col-9">
             <span className="heading">{title}</span>
           </div>
         </div>
       </section>
     );
   }

   export default Header;