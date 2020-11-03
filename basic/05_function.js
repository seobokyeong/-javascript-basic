// 1. function

//함수 선언식 - 이름을 지정해서
function myFunc() {
  //실행문 코드
  console.log('안녕')
}
//함수 호출
myFunc()

//함수 표현식 - 변수에 담아서 호출
const sayhello = function () {
  console.log('hello')
}
sayhello()

// 2. 매개변수 parameter

function printmessage(message) {
  console.log(message)
}
printmessage('하하하')
printmessage('하하')

//3. 기본 파라미터

function showInfo(title, name ) {
  console.log(`${title} by ${name}`)
}

showInfo('게르니카', '피카소')
showInfo('풍경')

// 4. Rest 파라미터 / Spread 연산자(es6)
// function printAll(...items) {
// // //   for (let i = 0; i < item.length; i++) {
// // //   console.log(item[i])
// // // }
// // // }

// for (const item  of itmes) {
//   console.log (item)
// }
// }

// printAll('봄', '여름', '가을', '겨울')

// 5. scope

let movie = '하하하'
function paintMovie () {
  let myMovie = '생활의 발견'
  console.log (myMovie)
  console.log(movie)
}
paintMovie ()

//6. return 
function plus(a,b) {
  console.log('안녕하세요')
  return a + b
}

const result = plus(5, 10)
console.log(result)

// 7. callback funtion 콜백함수
const call = function (myname, printPicaso, printJobs) {
  if(myname === 'Picaso') {
    printPicaso()
  }else {
    printJobs
  }
}

const printPicaso = function () {
  console.log('I am picaso')
}

const printJobs = function () {
  console.log('I am jobs')
}

call('jobs', printPicaso, printJobs)

// 8. arrow function
// const add = function (a, b) {
//   console.log(a + b)
//   return a + b  
// }

const add = (a,b) => a + b

const sum = add(5, 8)
console.log(sum)

// function sayHello() {
//   console.log('안녕')
//   console.log(this)
// }

const printHello = () => {
  console.log(this)
}

printHello()
