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
  submit,
  getValue,
}) {
  useEffect(() => {
    const validation = new FormValidation();
    validation.enableValidation(formName);
    return () => {
      validation.disableValidation();
    };
  }, [formName]);
  return (
    <>
      <form className='form-auth' name={formName} onSubmit={submit}>
        {children}
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>E-mail</span>
          <input
            name='email'
            className='form-auth__input'
            required
            onChange={getValue}
            type='email'
            pattern='.+@[A-Za-z]*\.[a-z]{2,4}'
            placeholder='name@mail.com'
          ></input>
          <hr className='form-auth__line'></hr>
          <span id='email' className='form-auth__error'></span>
        </label>
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>Пароль</span>
          <input
            name='password'
            className='form-auth__input'
            type='password'
            required
            onChange={getValue}
          ></input>
          <hr className='form-auth__line'></hr>
          <span id='password' className='form-auth__error'></span>
        </label>
        <span className='form-auth__submit-error'></span>
        <button className='form-auth__submit' type='submit'>
          {submitText}
        </button>
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
