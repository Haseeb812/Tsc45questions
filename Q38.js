"use strict";
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Sydney"); // Using the default country parameter
