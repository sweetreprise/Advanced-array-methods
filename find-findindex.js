/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

// i complicated it at first lol
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val, i) {
    // let values = Object.values(usersArray[i]);
    // if(values.toString() === username) {
    //   return val;
    // };
    return val.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const removedUser = usersArray.findIndex(function(val, i) {
    return val.username === username;
  });
  if(removedUser === -1) {
    return undefined;
  }
  return usersArray.splice(removedUser, 1)[0];
}