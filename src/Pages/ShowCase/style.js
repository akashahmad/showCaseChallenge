import React from "react";
export default () => (
  <style jsx="true">{`
  .container
  {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      width: 1000px;
   
  }
  .container h1{
      font-size: 24px;
      padding-left: 100px;
  }
  .close
  {
      color: #767573;
      text-decoration: none;
      position: absolute;
      right: 35px;
      top: 0px;
      font-size: 42px;
      cursor: pointer;
  }
  
  .header-modal
  {
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      padding-bottom: 60px;
  }
  .row
  {
      display: flex;
      justify-content: space-around;
      padding-bottom: 33px;
          
  }
  .rowbig
  {
      display: flex;
      justify-content: center;
  }
  .row h1 ,.rowbig h1
  {
      font-size: 16px;
      line-height: 22px;
      text-align: left;
  }
  .description h1
  {
      font-size: 16px;
      line-height: 22px;
  }
  .form
  {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .description {
      text-align: left;
      width: 900px;
      height: 100px;
   
  }
  .save
  {
      margin-top: 40px;
      margin-right: auto;
      margin-left: auto;
  }
  .red{
      color:red
  }
  `}</style>
);