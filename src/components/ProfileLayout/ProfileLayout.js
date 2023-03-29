import './ProfileLayout.css';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function ProfileLayout({ setLogged, setPreloader }) {
    return (
      <>
        <Header headerClassName='header_movies' />
        <Profile setLogged={setLogged} setPreloader={setPreloader}/>
      </>
    );
}
export default ProfileLayout;
