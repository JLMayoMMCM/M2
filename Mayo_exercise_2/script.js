const jsonString = `{ "name": "Jonathan May", "age": 20, "hobbies": ["strategic games", "reading", "Audiovisual"] }`;

const jsonObject = JSON.parse(jsonString);

console.log("The person's name is: " + jsonObject.name);
console.log("The person's age is: " + jsonObject.age);
console.log("The person's hobbies are: " + jsonObject.hobbies.join(", "));


const newJsonString = JSON.stringify(jsonObject);

console.log(newJsonString);