const localStorage = window.localStorage;

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function removeItem(key) {
  return localStorage.removeItem(key);
}

// currentUser
export const getCurrentUser = () => {
  const currentUser = getItem('currentUser');
  // validate
  if (currentUser && currentUser.token && currentUser.ts) {
    return currentUser;
  }
  return null;
};

export const setCurrentUser = ({ token, uid }) => setItem('currentUser', {
  token,
  uid,
  ts: new Date().valueOf(),
});

export const deleteCurrentUser = () => removeItem('currentUser');
