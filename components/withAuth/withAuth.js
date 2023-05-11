import { useRouter } from 'next/router';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default function withAuth(WrappedComponent) {
  return function (props) {
    const router = useRouter();
    const { token } = props;

    useEffect(() => {
      if (!token) {
        router.replace('/');
      }
    }, [token]);

    return token ? <WrappedComponent {...props} /> : null;
  };
}

// A helper function to fetch the token from the server-side
export async function getServerSideToken(context) {
  const { req } = context;
  const { token } = req.cookies;

  if (!token) {
    return { token: null };
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { token: decoded };
  } catch (err) {
    console.error('Error decoding token:', err);
    return { token: null };
  }
}
