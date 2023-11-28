

const AuthService = {
  createAccount: function(userData) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const existingUser = existingUsers.find(user => user.username === userData.username);

      if (!existingUser) {
          const newUser = {
              username: userData.username,
              password: userData.password,
              info: {
                  first_name: userData.first_name,
                  last_name: userData.last_name,
                  email: userData.email,
                  birth_date: userData.birth_date
              }
          };

          existingUsers.push(newUser);
          localStorage.setItem('users', JSON.stringify(existingUsers));

          return true; 
      } else {
          return false; 
      }
  },

  login: function(credentials) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const loggedInUser = existingUsers.find(user =>
          user.username === credentials.username && user.password === credentials.password
      );

      if (loggedInUser) {

          localStorage.setItem('currentUsername', credentials.username);
          return true; 
      } else {
          return false; 
      }
  },



};

export default AuthService;
