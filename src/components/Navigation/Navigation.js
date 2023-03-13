import { useLocation } from 'react-router-dom';
import NavigationAuthorization from '../NavigationAuthorization/NavigationAuthorization';
import NavigationMain from '../NavigationMain/NavigationMain';
import './Navigation.css';

function Navigation() {
  let location = useLocation().pathname;
  if(location === '/') {
    return(<NavigationAuthorization />)
  }
  if(location === '/signin' || location === '/signup') {
    return
  } else {
    return(<NavigationMain />)
  }
}
export default Navigation;
