const bcrypt = require('bcrypt');

const plainPassword = '';
const saltRounds = 10; // Adjust the number of salt rounds as desired

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Hashed password:', hash);
});
