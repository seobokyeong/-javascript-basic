// variable 변수
// var let const

// var 특징
// 블록{}을 무시, 읽기 쓰기 가능

{
var name = 'john'
console.log(name)
}

// let 특징
// 블록{} 밖에 적을 때 에러 발생, 읽기 쓰기 가능

{
let title = 'html'
console.log(title)

title = 'css'
console.log(title)

title = 'javascript'
console.log(title)
}

// const 특징
// 상수, 읽기 가능, 변하지 않음

{
  const subject = 'html'
  console.log(subject)

}

//변수의 데이터 타입
// 원시데이터 Number, String, boolean, null, undefined
// Object 싱글데이터를 묶어놓은 데이터
// function 데이터의 일종, 일급 객체
// 함수에 담을 수 있다
// 함수나 메서드의 인자로 넘길 수 있다
// 함수나 메서드에서 리턴 할 수 있다.

// Number 
const num = 10;
const width = 20.5;

console.log(`값은 ${num}이고 ${typeof num} 입니다.`)

const a = 1/0;
const b = 25/0;
const c = 'html'/10;

console.log(a)
console.log(b)
console.log(c)

const firstname = 'john'
const lastnamel = ' snow'
const fullname = firstname + lastnamel
console.log(fullname)
console.log(`${firstname} ${lastnamel}`)

//null
const fall = null
console.log(`${fall}이고 타입은 ${typeof fall}입니다`);

// undefined
let winter
console.log(`${winter}이고 타입은 ${typeof winter}입니다`)

//동적타입 = 자바스크립트는 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다
//이러한 동적 타입 ==> typescript

let word = 'winter'
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = 100
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = '100' + 10
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)
word = '100' / '10'
console.log(`값은 ${word}이고, 타입은 ${typeof word}`)