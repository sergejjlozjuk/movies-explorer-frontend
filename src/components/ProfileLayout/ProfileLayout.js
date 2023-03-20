import './ProfileLayout.css';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function ProfileLayout({ setLogged }) {
    return (
      <>
        <Header headerClassName='header_movies' />
        <Profile setLogged={setLogged} />
      </>
    );
}
export default ProfileLayout;
