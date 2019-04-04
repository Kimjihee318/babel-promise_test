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
/*
  위의 예제처럼 비동기 함수 내에서 Promise객체를 생성하고 그 내부에서 비동기 처리를 구현한다.
  이때 비동기 처리에 성공하면 resolve 메소드를 호출한다.
  이때 resolve 메소드의 인자로 비동기 처리 결과를 전달한다. callBack
  만약 비동기 처리에 실패하면 reject 메소드를 호출한다. 이때  reject 메소드의 인자로 에러 메시지를 전달한다.
  이 에러 메시지는 PRomise 객체의 후속 처리 메소드로 전달 된다.
*/