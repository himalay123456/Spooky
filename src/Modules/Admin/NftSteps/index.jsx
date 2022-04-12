import React from 'react';
import Minting from './components/Minting';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const Steps = () => {
  const [step, setStep] = React.useState(1);
  const [imageURL, setImageURL] = React.useState(null);

  const changeStep = (value) => {
    setStep(value);
  };
  return (
    <>
      { step === 1 && <Step1 changeStep={changeStep} setImageURL={setImageURL} /> }
      { step === 2 && <Step2 changeStep={changeStep} imageURL={imageURL} /> }
      { step === 3 && <Step3 changeStep={changeStep} /> }
      { step === 4 && <Minting changeStep={changeStep} /> }
    </>
  );
};

export default Steps;
