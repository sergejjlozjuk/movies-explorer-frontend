import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';
import Formauth from '../Formauth/Formauth';
import './Register.css';

function Register({ setPreloader, setLogged }) {
  const nav = useNavigate();
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
    const form = e.target;
    const formError = form.querySelector('.form-auth__submit-error');
    api
      .registration(data)
      .then((res) => {
        if (res) {
          api
            .login(data)
            .then((res) => {
              if (res) {
                setLogged(true)
                nav('/movies');
              }
            })
            .catch((err) => err);
        }
      })
      .catch((err) => {
        if (err === 400) {
          formError.textContent = 'Введены некорректные данные';
        }
        if (err === 409) {
          formError.textContent = 'Этот Email уже зарегистрирован';
        }
      })
      .finally(setPreloader(true));
  }
  return (
    <section className='register'>
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
            pattern='[A-Za-zА-Яа-яЁё\s\-]{3,30}'
          ></input>
          <hr className='form-auth__line'></hr>
          <span id='name' className='form-auth__error'></span>
        </label>
      </Formauth>
    </section>
  );
}

export default Register;
