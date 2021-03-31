import React, { useState } from 'react';
import Style from './style';
import Input from '../../Atoms/InputField/inputField';
import Button from '../../Atoms/Button/Button';
import {useHistory } from 'react-router-dom';
const HomeScreen = (props) => {
  let { setUserName, username } = props;
  const [error, setError] = useState(false);
  let history = useHistory();

  const submitHandler = () => {
    if (!username) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }
    history.push('/mainscreen');
  };
  return (
    <>
      <div className={`homepage ${error ? 'shakeAnimation' : ''} `}>
        <h1>
          Hi There!<br></br>Welcome to your education showcase.
        </h1>
        <div className='section'>
          <h2>Enter Your Name To Begin</h2>
          <Input setUserName={setUserName} />
        </div>
        <div onClick={() => submitHandler()}>
          <Button name="Let's Start" color='blue' />
        </div>
        {error && <p className="error">Please enter your name</p>}
      </div>
      <Style />
    </>
  );
};
export default HomeScreen;
