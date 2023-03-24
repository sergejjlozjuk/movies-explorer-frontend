import { Navigate } from 'react-router-dom';

function ProttectedRoutes({ element: Component, ...props }) {
  return props.logged ? (
    <Component {...props} />
  ) : (
    <Navigate to='/signin' replace />
  );
}

export default ProttectedRoutes;
