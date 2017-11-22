const promise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Daniel',
    //   age: 22
    // });
    reject('something went wrong');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');