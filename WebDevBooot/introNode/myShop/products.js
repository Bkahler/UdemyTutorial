var Faker = require("faker");

for(var i = 0 ; i < 10; i ++){
    console.log("Name: " + Faker.commerce.productName());
    console.log("price: " + "$" + Faker.commerce.price());
};