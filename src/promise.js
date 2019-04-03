const log = function(a) {
  return console.log(a);
}

// callBack pattern
let add10 = (a, callback) => {
  setTimeout(() => callback(a + 1), 100)
};

add10(5, res => {
  log(res);
}); //15

// if i use callback hell
add10(5, res => {
  add10(res, res => {
    add10(res, res => {
      add10(res, res => {
        add10(res, res => {
          log(res);
        });
      });
    });
  });
});

/* 
  VS promise
  promise에서는 이 함수에서 사용할 인자를 하나만 받는다.
  실제로 연산에 필요한 인자는 받지 않는다.
*/
function add20(a) {
  return new Promise(resolve => setTimeout(() => resolve(a + 20), 200));
}

add20(5)
  .then(log);

// promise를 이용한 연속 작업하기
add20(5)
  .then(add20)
  .then(add20)
  .then(add20)
  .then(log);