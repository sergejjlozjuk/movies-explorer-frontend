import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../HOC/AuthProvider';
import NavigationAuthorization from '../NavigationAuthorization/NavigationAuthorization';
import NavigationMain from '../NavigationMain/NavigationMain';
import './Navigation.css';

function Navigation() {
  const {logged} = useContext(AuthContext)
  let location = useLocation().pathname;
  if(location === '/' && logged === false) {
    return(<NavigationAuthorization />)
  }
  if(location === '/signin' || location === '/signup') {
    return
  } else {
    return(<NavigationMain />)
  }
}
export default Navigation;
