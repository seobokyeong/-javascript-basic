// 1. 조건 연산자 - if, else if, else
console.log('조건 연산자 - if')

const age = 20
if(age >= 20) {
  console.log('성인')
} else {
  console.log('청소년')
}

// if(조건){
//   //조건이 참일 때 여기 코드 실행
// } else {
//   //조건이 거짓일 때 여기 코드 실행
// }

// if(조건) console.log(hahaha) - 한줄이면 {} 생략가능
// if(조건) {
//   console.log(hahaha)
//   console.log(hahaha)
// } 

const month = 5
if(month >=3 && month <=5 ){
  console.log('spring')
} else if(month >=6 && month <=8 ) {
  console.log('summer')
} else if(month >=9 && month <=10) {
  console.log('fall')
} else {
  console.log('winter')
}

//2. 삼향 조건연산자
//조건 ? 값1 : 값2
//(조건이 참이면 값1 출력, 거짓 값2 출력/한줄만)

const myage = 15
console.log(myage >= 20 ? `성인` : `청소년`)

//3.조건연산자 - switch문
console.log('조건 연산자 - switch문')

const color = 'red'

switch(color) {
  case 'red':
    console.log('I like red')
    break
  case 'blue':
    console.log('I like blue')
    break
  case 'green':
    console.log('I like green')
    break
  default:
    console.log('I dont know')
    break
}