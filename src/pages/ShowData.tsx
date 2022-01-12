import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const ShowData = () => {
  const { state } = useContext(UserContext);

  return (
    <>
      <h2>Details</h2>

      {state.user.name && state.user.email ? (
        <>
          <p>
            <strong>Name:</strong> {state.user.name}
          </p>
          <p>
            <strong>E-mail:</strong> {state.user.email}
          </p>
          <br />
        </>
      ) : (
        <p>There no data here yet.</p>
      )}

      <Link to={'/'}>Go to Form</Link>
    </>
  );
};
