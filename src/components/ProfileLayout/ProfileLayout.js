import './ProfileLayout.css'
import Header from "../Header/Header";
import Profile from "../Profile/Profile";


function ProfileLayout() {
    return (
      <>
        <Header headerClassName='header_movies' />
        <Profile/>
      </>
    );
  }
  export default ProfileLayout;
  