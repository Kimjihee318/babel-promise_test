/* 
  Promise로 구현된 비동기 함수는 Promise 객체를 반환하여야 한다. 
  Promise로 구현된 비동기 함수를 호출하는 측 에서는 Promise 객체의 후속 처리 메소드를 통해
  비동기 처리 결과 또는 에러 메시지를 전달받아 처리한다.
  Promise 객체는 상태를 갖는데 이 상태에 따라 후속 처리 메소드를 체이닝 방식으로 호출 한다.

  --------------------------------------------------------------------------------
| Method | Excution                                                                   |
| then   | then 메소드는 두개의 콜백 함수를 인자로 받는다.                                      |
|        | 첫 번째 인자는 성공(fulfilled, resolve 함수가 호출 된 상태)                         |
|        | 두 번째 인자는 실패시(rejected, reject 함수가 호출된 상태)시 호출된다.                 |
| catch  | 예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출된다.          |
*/

// 비동기 함수
const url = 'http://jsonplaceholder.typicode.com/post/1';
function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      // 서버 응답 완료
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if(xhr.status === 200) {
          // 정상응답
          // resolve 메소드에 처리 결과를 전달
          resolve(xhr.response);
        } else {
          // 비정상 응답
          // reject 메소드에 에러 메시지를 전달
          reject('Error: ' + xhr.status);
        }
      }
    }
    // 비동기 방식으로 Request를 오픈한다.
    xhr.open('GET', url);
    // Request를 전송한다.
    xhr.send('Success');
  });
}
const url = 'http://jsonplaceholder.typicode.com/posts';

get(url).then(
  // 첫번째 콜백 함수는 성공(fulfiled, resolve 함수가 호출된 상태) 시 호출
  result => document.getElementByID('result').innerHTML = result,
  // 두번째 함수는 실패(rejected, reject 함수가 호출된 상태)시 호출된다.
  error => console.log(error)
);