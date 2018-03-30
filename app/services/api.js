import ApiHost from 'config/ServiceConfig';
const Wreck = require('wreck');

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: 'somemockemail@email.com',
        repository: 'http://github.com/username',
      });
    }, 100);
  });
}

export const login = async (email, password) => {
  try {
    // const result = await Wreck.post(`${ApiHost}/users/auth`, {
    //   payload: {
    //     email,
    //     password,
    //   },
    // });
    const result = await getUser();
    return result;
  } catch (error) {
    throw error;
  }
};
