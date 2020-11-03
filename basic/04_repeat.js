//반복문 - 조건이 참일 때 실행

let i = 3

// while (i > 0) {
//   console.log(`i는 ${i}`)
//   i--
// }

//for 는
// for(변수 초기화; 조건; 증감식){
//   실행문
// }

for(let j = 3; j > 0; j--) {
  console.log(j)
}

for(let k = 1; k <= 3; k++) {
  console.log(k)
}

const day = ['월', '화', '수', '목', '금']

for (let index = 0; index < day.length; index++) {
  console.log(day[index])
}

//break, continue 문
// 0 - 10 -> 0에서7까지만 출력 : break

// for (let i =0; i <=10; i++) {
//   if (i > 7) {
//     break
//   }
//   console.log(i)
// }

// 0 - 10 -> 홀수만 출력 : continue
for (let i =1; i < 11; i++) {
  if(i % 2 === 0) {
    continue
  }
  console.log(i)
}