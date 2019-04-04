const P = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  
  if(1) { resolve('result'); } // 성공시 호출
  else { reject('Failure reason'); } // 실패시 호출
});

console.log(P);

/*
  --------------------------------------------------------------------------------------------------

    Promise 생성자 함수가 인자로 전달받은 콜백 함수는 내부에서 비동기 처리 작업을 수행한다.
    이때 비동기 처리가 성공하면 콜백 함수의 인자로 전달받은 resolve함수를 호출한다.
    이때 Promise는 'fullfilled'상태가 된다.
    비동기 처리가 실패하면 reject 함수를 호출한다. 이때 Promise는 'rejected' 상태가 된다.

  --------------------------------------------------------------------------------------------------

  | State      | Mean                               | Expression                                   
  | pending    | 비동기 처리가 아직 수행되지 않은 상태       | resolve 또는 reject함수가 아직 호출되지 않은 상태     
  | fullfilled | 비동기 처리가 수행된 상태(성공)           | resolve 함수가 호출된 상태                        
  | rejected   | 비동기 처리가 수행된 상태(실패)           | reject 함수가 호출된 상태                         
  | settled    | 비동기 처리가 수행된 상태(성공 또는 실패)   | resolve 또는 reject 함수가 호출된 상태

  --------------------------------------------------------------------------------------------------
*/