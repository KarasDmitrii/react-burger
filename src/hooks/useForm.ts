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

//   import {useState} from 'react';
// export const useForm = (inputValues: string) => {
//     const [values, setValues] = useState(inputValues);
  
//     const handleChange = (e: React.ChangeEvent) => {
//       const {value, name} = e.target;
//       setValues({...value, [name]: value});
//     };
//     return {values, handleChange, setValues};
//   }