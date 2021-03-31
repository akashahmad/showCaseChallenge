import React from "react";
export default () => (
  <style jsx="true">{`
  .homepage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.homepage h1
{
    font-size: 24px;
    line-height: 37px;
    color: #212120;
    text-align: center;
}

.homepage h2
{
    font-size: 16px;
    line-height: 37px;
    color: #212120;
    text-align: left;
}
.section
{
    padding-top: 70px;
    padding-bottom: 50px;
}
.shakeAnimation{
  animation: shake 0.5s;
  animation-iteration-count: 1;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.error{
  color:red;
  font-size:12px;
  margin-top:20px
}

  `}</style>
);