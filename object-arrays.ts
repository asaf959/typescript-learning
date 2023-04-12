
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: "maximin",
  age: 30,
  hobbies: ['sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin')
// person.role[1] = 10;

let favoriteActivities: String[];
favoriteActivities= ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}