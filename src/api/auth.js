import store from 'store';
import sha256 from 'crypto-js/sha256';
import hex from 'crypto-js/enc-hex';
import { delay } from '../types/time';

// mock the database
const users = {
  admin: {
    username: 'admin',
    // 'password'
    password: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    city: undefined,
  },
  user: {
    username: 'user',
    // 'foobar'
    password: 'c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2',
    city: undefined,
  },
};

const currentUsers = store.get('users');
if (!currentUsers) {
  store.set('users', users);
}

export function login(username, password) {
  const users = store.get('users');
  const user = users[username] || {};

  if (hex.stringify(sha256(password)) === user.password) {
    return Promise
      .resolve(user)
      .then(delay(1000));
  } else {
    return Promise
      .resolve()
      .then(delay(3000))
      .then(() => {
        throw new Error('invalid password');
      });
  }
}

export function get(username) {
  const users = store.get('users');
  const user = users[username];

  if (user) {
    return Promise
      .resolve(user)
      .then(delay(1000));
  } else {
    return Promise
      .resolve()
      .then(delay(3000))
      .then(() => {
        throw new Error('user not found');
      });
  }
}

export function update(username, user) {
  const users = store.get('users');

  if (users[username]) {
    store.set(
      'users',
      {
        ...users,
        [username]: user,
      },
    );

    return Promise
      .resolve(user)
      .then(delay(1000));
  } else {
    return Promise
      .resolve()
      .then(delay(3000))
      .then(() => {
        throw new Error('user not found');
      });
  }
}
