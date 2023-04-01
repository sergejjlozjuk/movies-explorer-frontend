import { useEffect, useContext, useState } from 'react';
import './Profile.css';
import FormValidation from '../../utils/FormValidation';
import api from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../HOC/AuthProvider';

function Profile({ setLogged, setPreloader }) {
  const { user, signout, setNewUser } = useContext(AuthContext);
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
  });
  const nav = useNavigate();
  useEffect(() => {
    const validation = new FormValidation();
    validation.enableValidation('profile');
    return () => {
      validation.disableValidation();
    };
  }, []);
  function getValue(event) {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  function disableSubmit(submit) {
    submit.classList.add('submit_disable');
    submit.disabled = true;
  }
  function handleLoguot() {
    api
      .logout()
      .then((res) => {
        setLogged(false);
        nav('/');
        signout();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setPreloader(false);
    const form = event.target;
    const submit = form.querySelector('button');
    const inputList = Array.from(form.getElementsByTagName('input'));
    inputList.forEach((input) => (input.disabled = true));
    const formError = form.querySelector('.profile__form-error');
    if (data.email === user.email && data.name === user.name) {
      setPreloader(true);
      disableSubmit(submit);
      inputList.forEach((input) => (input.disabled = false));
      formError.classList.remove('success');
      return (formError.textContent = 'Email и Имя не были изменены');
    }
    api
      .updateUser(data)
      .then((res) => {
        if (res) {
          setNewUser(res);
          formError.textContent = 'Данные изменены';
          formError.classList.add('success');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 409) {
          formError.classList.remove('success');
          formError.textContent = 'Этот Email уже занят';
        }
      })
      .finally(() => {
        inputList.forEach((input) => (input.disabled = false));
        disableSubmit(submit);
        setPreloader(true);
      });
  }
  return (
    <section className='profile'>
      <h1 className='profile__greeting'>Привет, {user.name}!</h1>
      <form className='profile__form' name='profile' onSubmit={handleSubmit}>
        <label className='profile__form__lable'>
          <span className='profile__form__hint'>Имя</span>
          <input
            className='profile__form__input'
            placeholder='Имя'
            pattern='[A-Za-zА-Яа-яЁё\s\-]{3,30}'
            name='name'
            onChange={getValue}
            value={data.name}
          ></input>
          <span id='name' className='profile__form__input-error'></span>
        </label>
        <hr className='profile__form__line'></hr>
        <label className='profile__form__lable'>
          <span className='profile__form__hint'>E-mail</span>
          <input
            className='profile__form__input'
            placeholder='E-mail'
            type='email'
            pattern='.+@[A-Za-z]*\.[a-z]{2,4}'
            name='email'
            onChange={getValue}
            value={data.email}
          ></input>
          <span id='email' className='profile__form__input-error'></span>
        </label>
        <span className='profile__form-error'></span>
        <button className='profile__form__submit' type='submit'>
          Редактировать
        </button>
      </form>
      <button className='profile__link' onClick={handleLoguot}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
