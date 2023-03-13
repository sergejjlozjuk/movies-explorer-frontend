import './Formauth.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormValidation from '../../utils/FormValidation';

function Formauth({
  children,
  linkText,
  buttonText,
  url,
  submitText,
  formName,
}) {
  useEffect(() => {
    const validation = new FormValidation();
    validation.enableValidation(formName);
    return () => {
      validation.disableValidation();
    };
  });
  return (
    <>
      <form className='form-auth' name={formName}>
        {children}
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>E-mail</span>
          <input name='Email' className='form-auth__input' required></input>
          <hr className='form-auth__line'></hr>
          <span id='Email' className='form-auth__error'></span>
        </label>
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>Пароль</span>
          <input
            name='password'
            className='form-auth__input'
            type='password'
            required
          ></input>
          <hr className='form-auth__line'></hr>
          <span id='password' className='form-auth__error'></span>
        </label>
        <button className='form-auth__submit'>{submitText}</button>
      </form>
      <span className='form-auth__link'>
        {linkText}
        <Link to={url} className='form-auth__link_login'>
          {buttonText}
        </Link>
      </span>
    </>
  );
}

export default Formauth;
