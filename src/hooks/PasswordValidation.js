import { useState, useEffect } from "react";

export const usePasswordValidation = ({ firstPassword = "", confirmPassword = "", requiredLength=8}) => {
const [validLength, setValidLength] = useState(null);
const [hasNumber, setHasNumber] = useState(null);
const [upperCase, setUpperCase] = useState(null);
const [lowerCase, setLowerCase] = useState(null);
const [specialChar, setSpecialChar] = useState(null);
const [match, setMatch] = useState(null);

  useEffect(() => {
    
  
      setValidLength(firstPassword.length >= requiredLength ? true : false);
      setUpperCase(firstPassword.toLowerCase() !== firstPassword);
      setLowerCase(firstPassword.toUpperCase() !== firstPassword);
      setHasNumber(/\d/.test(firstPassword));
      setMatch(firstPassword && firstPassword === confirmPassword);
      setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
        
      

  }, [firstPassword, confirmPassword]);


return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];}