// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to API to get profile information to print out

const profile = require('./profile');

const users = process.argv.slice(2);

// for (let i=0; i<users.length; i++) {
//   getProfile(users[i])
// }

// users.forEach(username => {
//   getProfile(username);
// })

users.forEach(profile.get);
