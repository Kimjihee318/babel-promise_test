/*
  Promise 객체의 후속 처리 메소드를 사용하여 비동기 처리 결과에 대한 후속 처리를 수행한다.
  비동기 처리 시 발생한 에러 메세지는 then의 두번째 콜백 함수로 전달된다.
  then에서 찾은 에러는 Promise 비동기 처리에서 발생한 에러만을 처리하지만,
  후속 처리 메소드 catch를 사용하여 처리 하는 경우에는 then에서 발생한 에러도 캐치 할 수 있다.
*/
const url = 'http://jsonplaceholder.typicode.com/posts';

// 포스트 id가 1인 포스트를 검색하고 프로미스를 반환한다.
get(`${url}/1`)
  // 포스트 id가 1인 포스트를 작성한 사용자의 아이디로 작성된 모든 포스트를 검색하고 프로미스를 반환한다.
  .then(result1 => get(`${url}?userId=${JSON.parse(result1).userId}`))
  // 포스트 검색 결과를 DOM에 반영한다.
  .then(result2 => document.getElementById('result').innerHTML = result2 )
  .catch(error => console.log(error));