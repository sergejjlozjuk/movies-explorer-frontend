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
        formName='login'
      ></Formauth>
    </section>
  );
}

export default Login;
