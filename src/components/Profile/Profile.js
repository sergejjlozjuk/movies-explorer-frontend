import { useEffect, useContext } from 'react';
import './Profile.css';
import FormValidation from '../../utils/FormValidation';
import api from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../HOC/AuthProvider';

function Profile({ setLogged }) {
  const {user, signout} = useContext(AuthContext);
  const nav = useNavigate();
  useEffect(() => {
    const validation = new FormValidation();
    validation.enableValidation('profile');
    return () => {
      validation.disableValidation();
    };
  });
  function handleLoguot() {
    api
      .logout()
      .then((res) => {
        setLogged(false);
        nav('/')
        signout()
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className='profile'>
      <h1 className='profile__greeting'>Привет, {user.name}!</h1>
      <form className='profile__form' name='profile'>
        <label className='profile__form__lable'>
          <span className='profile__form__hint'>Имя</span>
          <input className='profile__form__input' placeholder='Имя'></input>
        </label>
        <hr className='profile__form__line'></hr>
        <label className='profile__form__lable'>
          <span className='profile__form__hint'>E-mail</span>
          <input className='profile__form__input' placeholder='E-mail'></input>
        </label>
        <button className='profile__form__submit'>Редактировать</button>
      </form>
      <button className='profile__link' onClick={handleLoguot}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
