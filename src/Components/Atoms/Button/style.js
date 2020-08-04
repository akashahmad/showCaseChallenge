import React from "react";
export default () => (
  <style jsx="true">{`
  button {

    border-radius: 3%;
    border: 0;
   
    width: 250px;
    min-height: 50px;
    line-height: 22px;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
}
.blue {
    background-color: #29a9ed;
    color: white;
}
.white {
    background-color: white;
    color: black;
    box-shadow: 0 0 8px -5px rgba(0,0,0,1);
}
@media (min-width:998px) and (max-width:1350px) {
    button {
    width: 200px;
    }
}

  `}</style>
);