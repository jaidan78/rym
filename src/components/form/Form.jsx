import React, { useState } from 'react';
import style from './Form.module.css';
import validation from '../validation/validation'
 
const { log, box, input , button } = style;

const Form = (props) => {

  const { login } = props;

  const [userData, setUserData] = useState({
    email:'',
    password:'',
  });

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserData({...userData, [name]:value});

    setErrors(validation({...userData, [name]:value}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    login(userData);
  }

  return (
   <div className={log}>
    <form className={box}>
      <div>
        <label htmlFor="email" >Username</label>
        <input className={input}
               type="email"
               id="email"
               name="email"
               placeholder='e-mail...'
               onChange={handleChange}
               value={userData.email} />
        {
          errors.e1 ? (<p>{errors.e1}</p>)
          : errors.e2 ? (<p>{errors.e2}</p>)
          : (<p>{errors.e3}</p>)
        }
        <label htmlFor="password" >Password</label>
        <input className={input}
               type="password" 
               id="password" 
               name="password" 
               placeholder='password...'
               onChange={handleChange}
               value={userData.password} />
      </div>
      {
        errors.p1 ? <p>{errors.p1}</p>
        : <p>{errors.p2}</p>
        
      }
      <button className={button}
              type="submit"
              onClick={handleSubmit}>Login</button>
    </form>
   </div>
  )
}

export default Form;