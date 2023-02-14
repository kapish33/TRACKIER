import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const { tokens } = useSelector((state) => state?.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (!!tokens) {
      setIsAuthenticated(true);
    }
  }, [tokens]);

  //   we can make it network dependent
  // useEffect(() => {
  //   let myHeaders = new Headers();
  //   myHeaders.append('Authorization', token);
  //   let requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow',
  //   };
  //   fetch(`${finalUrl()}/auth/authenticate`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) =>
  //       result.success === true
  //         ? setIsAuthenticated(result.success)
  //         : navigate('/')
  //     )
  //     .catch((error) => navigate('/'));
  // }, [token, navigate, dispatch]);

  // or simpily using axios :))
  return isAuthenticated ? (
    children
  ) : (
    <div>Please Wait Let Me Verify... we can redirect also to / </div>
  );
}

export default ProtectedRoute;
