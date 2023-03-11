import Formauth from '../Formauth/Formauth';
import './Register.css';

function Register() {
  return (
    <section className='register'>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <Formauth
        linkText='Уже зарегистрированы?'
        buttonText='Войти'
        url='/signin'
        submitText='Зарегистрироваться'
      >
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>Имя</span>
          <input className='form-auth__input'></input>
          <hr className='form-auth__line'></hr>
          <span className='form-auth__error'></span>
        </label>
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>E-mail</span>
          <input className='form-auth__input'></input>
          <hr className='form-auth__line'></hr>
          <span className='form-auth__error'></span>
        </label>
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>Пароль</span>
          <input className='form-auth__input' type='password'></input>
          <hr className='form-auth__line'></hr>
          <span className='form-auth__error'></span>
        </label>
      </Formauth>
    </section>
  );
}

export default Register;
