import React from "react";
export default () => (
  <style jsx="true">{`
  .card
  {

      margin-bottom: 25px;
  }
  .cards-container
  {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 50px;
      margin-left: 100px;
  }
  .card-container
  {
      margin-left: auto;
      margin-right: auto;
      padding: 40px;
      width: 900px;
      background-color: white;
      box-shadow: 0px 0px 8px -5px rgba(0,0,0,1);
      }
  `}</style>
);