import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AdminAuth = (WrappedComponent) => {
  return (props) => {
    const { isLoggedIn } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace('/admin/login');
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default AdminAuth;
