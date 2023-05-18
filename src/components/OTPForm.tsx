import React, { useEffect, useRef } from "react";

interface OTPFormProps {
  digit: number;
}

function OTPForm({ digit }: OTPFormProps): JSX.Element {
  const otpInputsRef = useRef<HTMLInputElement[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let otp = "";

    for (let i = 0; i < digit; i++) {
      otp = otp + otpInputsRef.current[i].value;
    }
    alert(otp);
    // Handle OTP submission
    // Make an API request to validate the OTP on the server
  };

  const handleResendOTP = () => {
    // Handle resend OTP
    // Make an API request to generate and send a new OTP
    otpInputsRef.current[0].focus();
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (value && index < digit - 1) {
      otpInputsRef.current[index + 1].focus();
    } else if (value === "" && index > 0) {
      otpInputsRef.current[index].focus();
    }
    // Handle input change
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (index === 0) {
      return;
    }
    if (event.key === "Backspace" && otpInputsRef.current[index].value === "") {
      otpInputsRef.current[index - 1].focus();
    } else if (event.key === "Backspace" && index > 0) {
      otpInputsRef.current[index].focus();
    }
  };

  useEffect(() => {
    otpInputsRef.current[0].focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          OTP:
          {Array.from({ length: digit }, (_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(input) =>
                (otpInputsRef.current[index] = input as HTMLInputElement)
              }
              onChange={(event) => handleInputChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className="border border-black h-auto w-6"
            />
          ))}
        </label>
      </div>

      <button type="submit" >Submit</button>
      <button type="button" onClick={handleResendOTP}>
        Resend OTP
      </button>
    </form>
  );
}

export default OTPForm;
