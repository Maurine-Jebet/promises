// 1.Write an asynchronous function that accepts a message string and 
//a delay time in milliseconds. The function should log the message 
//to the console after the specified delay time.
async function delay(word,delay){
    await new Promise(resolve=>
        setTimeout(resolve,delay))
        console.log(word);

};
delay("Football is my game",5000)




// 2.You have an array of user IDs and a function getUserData(id) 
//that returns a Promise with user data when given a user ID. Write an 
//asynchronous function that fetches and logs the data for each user ID 
//one by one, in sequence.
const myIDs = [5, 15, 20, 25, 30];
  async function userData() {
    for (const id of myIDs) {
      const userData = await userData(id);
      console.log(userData);
    }
  }
  userData();









// 3.You have an asynchronous function performTask() that returns 
//a Promise. The Promise resolves if the task is successful and rejects
 //if there's an error. Write a function that calls performTask() and 
 //logs a custom success message if the task is successful, and a custom 
 //error message if there's an error.
 

let performTask = true;

let promise = new Promise (function(resolve,reject){
    if (success){
        resolve("I won the competitions");
    }
    else{
        reject("I lost the competition")
    }
}).then(()=>{console.log("My life is better");})
.catch(()=>{console.log("I will try football");})
.finally(()=>{console.log("I will appreciate myself");});
console.log({promise});




