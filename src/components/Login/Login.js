import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';
import Formauth from '../Formauth/Formauth';
import './Login.css';

function Login({ setLogged, setPreloader }) {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  function getValue(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  function handleAuthorization(e) {
    setPreloader(false);
    e.preventDefault();
    const formError = e.target.querySelector('.form-auth__submit-error');
    api
      .login(data)
      .then((res) => {
        if(res) {
          setLogged(true)
          nav('/movies');
        }
      })
      .catch((err) => {
        if(err === 401) {
          formError.textContent = 'Неверный Email или пароль'
        }
      })
      .finally(setPreloader(true))
  }
  return (
    <section className='login'>
      <h1 className='login__title'>Рады видеть!</h1>
      <Formauth
        linkText='Ещё не зарегистрированы?'
        buttonText='Регистрация'
        url='/signup'
        submitText='Войти'
        formName='login'
        submit={handleAuthorization}
        getValue={getValue}
      ></Formauth>
    </section>
  );
}

export default Login;
