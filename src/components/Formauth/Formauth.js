import './Formauth.css';
import { Link } from 'react-router-dom';

function Formauth({ children, linkText, buttonText, url, submitText }) {
  return (
    <>
      <form className='form-auth'>{children}
      <button className='form-auth__submit'>{submitText}</button>
      </form>
      <span className='form-auth__link'>
        {linkText}
        <Link to={url} className='form-auth__link_login'>
          {buttonText}
        </Link>
      </span>
    </>
  );
}

export default Formauth;
