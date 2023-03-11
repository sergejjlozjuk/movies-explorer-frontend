import Formauth from '../Formauth/Formauth';
import './Login.css';

function Login() {
  return (
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <Formauth
        linkText='Ещё не зарегистрированы?'
        buttonText='Регистрация'
        url='/signup'
        submitText='Войти'
      >
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

export default Login;
