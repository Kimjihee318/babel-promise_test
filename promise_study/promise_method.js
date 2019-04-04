/*
  Promise.reslove와 Promise.reject 메소드는 존재하는 값을(ex. arr) Promise로 래핑하기 위해 사용한다.
  | method          | Mean                                                |
  | Promise.reslove | 인자로 전달된 값을 resolve하는 Promise를 생성한다.          |
  | Promise.reject  | 인자로 전달된 값을 reject하는 Promise를 생성한다.           |
*/
const arr = [1, 2, 3];
const resolvePromise = Promise.resolve(arr);
resolvePromise.then(console.log); // Promise값이 되어 then 을 붙이는것이 가능함 // [1, 2, 3]

const resolvePromise2 = new Promise(resolve => resolve(arr));
resolvePromise2.then(console.log);


const arr2 = ['No', 'Err', 'WoW'];
const rejectPromise = Promise.reject(arr2);
rejectPromise.catch(console.log);

const rejectPromise2 = new Promise((resolve, reject) => reject(new Error('Error!')));
rejectPromise2.catch(console.log);
