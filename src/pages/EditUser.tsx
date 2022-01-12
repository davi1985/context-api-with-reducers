import { ChangeEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const EditUser = () => {
  const { state, dispatch } = useContext(UserContext);
  const [name, setName] = useState(state.user.name);
  const [email, setEmail] = useState(state.user.email);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUpdated = () => {
    dispatch({
      type: 'CHANGE_USER',
      payload: {
        name,
        email,
      },
    });

    setName('');
    setEmail('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        justifyContent: 'center',
        margin: 'auto',
        textAlign: 'center',
        fontSize: '1rem',
      }}
    >
      <h2>
        Edit user [theme: <i>{state.theme.status}</i>]
      </h2>

      <input
        style={{ padding: '0.5rem' }}
        type="text"
        placeholder="Your Fullname"
        value={name}
        onChange={handleChangeName}
      />
      <input
        style={{ padding: '0.5rem', marginTop: '0.5rem' }}
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={handleChangeEmail}
      />

      <button
        style={{ marginTop: '0.5rem', padding: '0.5rem' }}
        onClick={handleUpdated}
      >
        Update
      </button>
      <br />

      <Link to={'/list'}>See more details</Link>
    </div>
  );
};
