// init-mongo.js

db = db.getSiblingDB('BlogAppDB');

db.createCollection('blogAppData');
db.createCollection('users');

// Optionally, you can insert some initial data
db.blogAppData.insertMany([
  { title: 'First Post', content: 'This is my first post' },
  { title: 'Second Post', content: 'This is my second post' }
]);

db.users.insertMany([
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
]);

