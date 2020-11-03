//1. 문자열 연결 연산자

console.log('문자열======')
console.log('winter' + 'is' + 'coming')
console.log('10' + 2)
const say1 = 'winter'
const say2 = 'is coming'
console.log(`리터럴 문자열 : ${say1} ${say2}`)

//2. 산술 연산자
console.log('산술 연산자=======')
console.log(100 + 10)
console.log(100 - 10)
console.log(100 * 10)
console.log(100 / 10)
console.log(100 % 10)
console.log(100 ** 10)

//3. 증감 연산자
console.log('증감 연산자=======')
let number = 8
console.log(number)
number++
console.log(number)
number--
console.log(number)

let num1 = 10
let num2 = ++num1
console.log(num1, num2)

let conut1 = 10
let conut2 = conut1++
console.log(conut1, conut2)

//4. 할당 연산자
console.log('할당 연산자=======')
let x = 10
let y = 5

x = x + y //x +=y
console.log(x)

x = x - y //x -=y
console.log(x)

x = x * y //x *=y
console.log(x)

x = x / y //x /=y
console.log(x)

x = x % y //x %=y
console.log(x)

//5. 비교 연산자
console.log('비교 연산자=======')
console.log(1000 < 100)
console.log(1000 <= 100)
console.log(1000 > 100)
console.log(1000 >= 100)

//6. 논리 연산자
//||(or) &&(and) !(not)
console.log('할당 연산자=======')
let a = 100 > 50
let b = 10 < 5
let c = true

// || 하나라도 true 이면 전체 true
console.log(a || b || c)

//&& 전부 trun 일 경우만 true
console.log(a && b && c)

// ! 값을 반대로 바꾼다
b = !b //true
console.log(a && b && c)

//7. 동등/일치 연산자
//== === != !==
console.log('동등/일치 연산자=======')

const value1 = '100'
const value2 = 100

//동등 연산자 값만
console.log(value1 == value2)
console.log(value1 != value2)

//일치 연산자 데이터 타입까지
console.log(value1 === value2)
console.log(value1 !== value2)

console.log('-------------------------')
console.log(0 == false)
console.log(0 === false)
console.log('' == false)
console.log('' === false)
console.log(null == undefined)
console.log(null === undefined)
console.log('-------------------------')
