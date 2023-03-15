import {useState} from 'react';

type TinputValues = {
  [key: string]: string | undefined
}

export const useForm = (inputValues: TinputValues) => {
    const [values, setValues] = useState(inputValues);

    
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {value, name} = e.target;
      setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
  }

