const log = (a) => console.log(a)
/*
  Promise는 비동기 상황에서 함수합성을 안전하게 하는 도구
  비동기 값을 가지고 연속적인 함수 합성을 하는 모나드
  함수 합성이란 // f.g의 실행결과를 f에 전달해서 값을 만드는것을 함수 합성이라고 함 = f(g(x))
*/

const g = a => a + 1;
const f = a => a * a;

log(f(g(1))); // 64
log(f(g())); // NaN 이와같은 경우 빈값을 넣을경우 원하지 않는 효과가 나오게 되는데

const makeArr = Array.of(1, 2, 3); // Array.of(...) | Arr을 만드는 함수
makeArr.map(g).map(f).forEach(d => log(d)); // monad 예 forEach이용하여 출력하거나 html에 요소 넣기 가능
[].map(g).map(f).forEach(d => log(d)); // 이경우 아무런 효과도 생기지 않음 이런것이 Monad

[1,2,3,4].map(g).map(f).filter(d => d % 2).forEach(d => log(d)); // 중간중간에 함수를 집어 넣으시오!

log('Promise ------------------------ ')

const res = Promise.resolve(2);
res.then(g).then(f).then(r => log(r)); // 이것도 비동기 인가 봉가

new Promise(resolve => 
  setTimeout(() => resolve(4), 10)
).then(g).then(f).then(r => log(r));