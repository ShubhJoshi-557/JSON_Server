const { faker } = require('@faker-js/faker');
const fs = require("fs");

const generateUsersData = (number) => {
  const users = [];
  while (number >= 0) {
    users.push({
		id: number,
        username: faker.internet.userName(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        website: faker.internet.domainName(),
        address: {
            street: faker.address.street(), // Address line 1
            suite: faker.address.buildingNumber(), // Address line 2
            city: faker.address.city(),
            zipcode: faker.address.zipCode(),
        },
        company: {
            name: faker.company.name(),
        },
    });
    number--;
  }
  return users;
};

// console.log(generateUsersData(10));
fs.writeFileSync(
    "./db.json",
    JSON.stringify({ users: generateUsersData(10) })
);