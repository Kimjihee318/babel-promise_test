const log = function(a) {
  return console.log(a);
}

let add10 = (a, callback) => {
  setTimeout(() => callback(a + 1), 100)
};

let cb = add10(5, res => {
  log(res);
});

add10(5, res => {
  add10(res, res => {
    add10(res, res => {
      log(res);
    });
  });
});

/* 
  promise의 가장 중요한 점은 비동기 값을 일급으로 받는 것이다.
  promise : 1.대기, 2.성공, 3.실패를 다루는 일급 값으로 이루어져 있음 => 이점이 제일 중요한 핵심입니다.
  !!return (new Promise)라는 비동기 값을 return한다!!
*/
function add20(a) {
  return new Promise(resolve => setTimeout(() => resolve(a + 20), 200));
}

add20(5)
  .then(log);

let pr = add20(5)
  .then(add20)
  .then(log);