async function f(choice) {

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      if (choice === 'pass') {
        resolve('Done!');
      } else {
        reject('Failed');
      }
    }, 1000)
  });

  let result = await promise; // wait till the promise resolves (*)
  console.log('before await');
  console.log('return value of the Promise: ' + result);
  return 'Resolved';
}

function resolved(result) {
  console.log(result);
}

function rejected(reason) {
  console.error(reason);
}


f('pass').then(resolved, rejected);
f().then(resolved, rejected);

console.log('should be printed before \"done!\"');

// // using a resolved promise, the 'then' block will be triggered instantly,
// // but its handlers will be triggered asynchronously as demonstrated by the console.logs
// const resolvedProm = Promise.resolve(33);
//
// let thenProm = resolvedProm.then((value)=>{
//     console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
//     return value;
// });
// // // instantly logging the value of thenProm
// // console.log(thenProm);
//
// // using setTimeout we can postpone the execution of a function to the moment the stack is empty
// setTimeout(()=>{
//     console.log(thenProm);
// });
