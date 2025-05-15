import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step_one from "./Steps/Step_one";
import Step_two from "./Steps/Step_two";
import Step_three from "./Steps/Step_three";

export default function Reset() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleNext = (e) => {
    e.preventDefault();

    if (step === 3) {
           navigate('/*');
    } else {
        setStep((prev) => prev += 1);
    }
    
    }

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

          {step === 3 && (
            <>
                <Step_three onNext={handleNext} />
            </>
          )}
        </>
      );
}
