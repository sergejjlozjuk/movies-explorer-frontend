import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';
import Formauth from '../Formauth/Formauth';
import Preloader from '../Preloader/Preloader';
import './Register.css';

function Register() {
  const nav = useNavigate();
  const [preloader, setPreloader] = useState(true);
  const [data, setData] = useState({
    name: '',
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
  function handleRegistration(e) {
    setPreloader(false);
    e.preventDefault();
    api
      .registration(data)
      .then(() =>
        api
          .login(data)
          .then(() => nav('/movies'))
          .catch((err) => {
            setPreloader(true);
            console.log(err);
          })
      )
      .catch((err) => {
        setPreloader(true);
        console.log(err);
      });
  }
  return (
    <section className='register'>
      <Preloader hidden={preloader} />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <Formauth
        linkText='Уже зарегистрированы?'
        buttonText='Войти'
        url='/signin'
        submitText='Зарегистрироваться'
        formName='register'
        submit={handleRegistration}
        getValue={getValue}
      >
        <label className='form-auth__lable'>
          <span className='form-auth__hint'>Имя</span>
          <input
            name='name'
            className='form-auth__input'
            required
            onChange={getValue}
          ></input>
          <hr className='form-auth__line'></hr>
          <span id='name' className='form-auth__error'></span>
        </label>
      </Formauth>
    </section>
  );
}

export default Register;
