import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Profile.css';
import FormValidation from '../../utils/FormValidation';

function Profile() {
  useEffect(() => {
    const validation = new FormValidation()
    validation.enableValidation('profile')
    return () => {
      validation.disableValidation()
    };
  });
  return (
    <section className='profile'>
      <h1 className='profile__greeting'>Привет, Виталий!</h1>
      <form className='profile__form' name='profile'>
        <label className='profile__form__lable'>
          <span className='profile__form__hint'>Имя</span>
          <input className='profile__form__input' placeholder='Имя' ></input>
        </label>
        <hr className='profile__form__line'></hr>
        <label className='profile__form__lable'>
          <span className='profile__form__hint'>E-mail</span>
          <input className='profile__form__input' placeholder='E-mail'></input>
        </label>
        <button className='profile__form__submit'>Редактировать</button>
      </form>
      <Link to='/' className='profile__link'>
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
