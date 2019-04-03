const log = (a) => console.log(a);

const go1 = (a, f) => f(a);
const go2 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
//
const add5 = a => a + 5;
// 100ms 이후에 받은 인자값을 그대로 반환하는 함수
const delay100 = a => new Promise(resolve => 
  setTimeout(() => resolve(a), 100)
);

log(go1(10, add5));
/*
  위와 같은 함수에서는 값이 실행시키자 마자
  나오는 값으로 나와야 함수를 실행 할 수가 있다.
  아래의 함수는 promise로 실행과 동시에 값이 
  나오지 않아 정상적인 출력값이 나오지 않았다.
*/
log(go1(Promise.resolve(10), add5)); //[object Promise]5
// log(Promise.resolve(10)); // 이게 뭔가 해서..
log(go2(delay100(10), add5));

const r = go1(10, add5);
log(r); //15

const r2 = go2(delay100(10), add5);
r2.then(log); //15


