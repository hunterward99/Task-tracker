// import './../../css/general.css';
// import Input from '../../Components/Input/Input';
// import Button from '../../Components/Button/Button';
// import Title from '../../Components/Title/Title';
// import Link from '../../Components/Link/Link';

// function Registration() {
//   return (
//     <>
//       <Title title="Регистрация аккаунта" />

//       <Input name="email" placeholder="Почта" type="email" />
//       <Input name="password" placeholder="Пароль" type="password" />
//       <Input placeholder="Повторите пароль" type="password" />

//       <Button />
//         <Link href="/*" text="У меня есть аккаунт" />
//     </>
//   );
// }

// export default Registration;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step_one from './Steps/Step_one';
import Step_two from './Steps/Step_two';

function Registration() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

    const handleNext = (e) => {
    e.preventDefault();

    if (step === 2) {
           navigate('/*');
    } else {
        setStep((prev) => prev += 1);}
    
  };

  return (
    <>
      {step === 1 && (
        <>
            <Step_one onNext={handleNext} />
        </>
      )}

      {step === 2 && (
        <>
            <Step_two onNext={handleNext} />
        </>
      )}
    </>
  );
}

export default Registration;
