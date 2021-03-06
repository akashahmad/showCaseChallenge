import React from 'react';
export default () => (
  <style jsx='true'>{`
    .card-container {
      margin-left: auto;
      margin-right: auto;
      padding: 40px;
      width: 1280px;
      background-color: white;
      box-shadow: 0px 0px 8px -5px rgba(0, 0, 0, 1);
      transition: transform .2s;
      cursor:pointer

    }
    .card-container:hover{
      transform: scale(1.03);
    }
    .card-container .textin {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .textin p {
      font-weight: lighter;
    }

    .card-container h1 {
      font-size: 20px;
      line-height: 37px;
      font-weight: bolder;
    }
    h2,
    p {
      font-size: 18px;
      line-height: 29px;
    }
    .lighter {
      color: #767573;
    }
    .description {
      padding-top: 21px;
    }
    .fonts {
      font-weight: 100;
    }
  `}</style>
);
