print('START');

db = db.getSiblingDB('mongodb-fullstack');

db.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'mongodb-fullstack'}],
});

db.createCollection('users');

db.users.insertMany([
    { username: "Casey", password: "password", role: "admin" },
    { username: "Patel", password: "password1", role: "admin" },
    { username: "Bob", password: "password12", role: "user" },
    { username: "George", password: "password123", role: "user" },
]);

db.createCollection('employees');

db.employees.insertMany([
    { firstName: "John", lastName: "Doe", email: "john.doe@email.com" },
    { firstName: "Jane", lastName: "Doe", email: "jane.doe@email.com" },
    { firstName: "Alice", lastName: "Johnson", email: "alice.johnson@email.com" },
    { firstName: "Bob", lastName: "Smith", email: "bob.smith@email.com" },
    { firstName: "Carol", lastName: "Williams", email: "carol.williams@email.com" },
    { firstName: "Casey", lastName: "Jones", email: "casey.jones@gmail.com" }
]);

print('END');