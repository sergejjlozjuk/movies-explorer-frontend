import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';
import Formauth from '../Formauth/Formauth';
import Preloader from '../Preloader/Preloader';
import './Login.css';

function Login({ setLogged }) {
  const nav = useNavigate();
  const [preloader, setPreloader] = useState(true);
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
    api
      .login(data)
      .then((res) => {
        console.log(res);
        setLogged(true);
        nav('/movies');
      })
      .catch((err) => {
        setPreloader(true);
        console.log(err);
      });
  }
  return (
    <section className='login'>
      <Preloader hidden={preloader} />
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
