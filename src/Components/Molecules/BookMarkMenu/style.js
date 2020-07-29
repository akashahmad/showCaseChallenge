import React from "react";
export default () => (
  <style jsx="true">{`
  .book-mark-menu
  {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      margin-left: 40px;
      margin-top: 20px;
      
  }
  .book-mark-menu h1
  {
      font-size: 18px;
      text-align: left;
      line-height: 37px;
  }
  @media (min-width:998px) and (max-width:1406px) {
     .book-mark-menu
     {
         margin-left: 0px;    
  
     }
   
  
  }
  
  `}</style>
);