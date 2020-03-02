import React, { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

const Login = React.memo(({
  id,
  className,
  onSubmit,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      id={id}
      className={cx(styles.className, className)}
      onSubmit={(evt) => {
        evt.preventDefault();
        if (typeof onSubmit === 'function') {
          onSubmit(evt, username, password);
        }
      }}
    >
      <div className={styles.username}>
        <label htmlFor="login-username">username</label>
        <input
          id="login-username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
      </div>
      <div className={styles.password}>
        <label htmlFor="login-password">password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
});

export default Login;
