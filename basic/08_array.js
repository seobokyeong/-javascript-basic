//array 배열

// 1.배열 만들기

const arr1 = new Array()
console.log(arr1)

const arr2 = [1, 3, 5, 7, 9]
console.log(arr2)

const arr3 = ['what', 'are', 'u']
console.log(arr3)

const arr4 = [
  'a',
  { model: 'apple', price: 1000 },
  { model: 'galaxy', price: 2000 }
]
console.log(arr4)
console.log(arr4[1].model)

//2. 배열 출력
var a = 1
let b = 2
const c = 3
//const 쓰는 배열은 공간에 있는 값을 참조, 그래서 값이 변해도 된다
const books = ['html', 'css', 'javascropt']
console.log(books)
console.log(books.length)
console.log(books[0])
console.log(books[books.length - 1])

console.clear()

//3. 반복 출력
//for문
for (let i = 0; i < books.length; i++) {
  console.log(books[i])
}

//for of
for (let book of books) {
  console.log(book)
}

//forEach - 함수
// books.forEach(function (book) {
//   console.log(book)
// })

// books.forEach((item) => console.log(item))

books.forEach((book) => {
  console.log(book + ' hello')
})

//4. 추가 삭제
//뒤에서 추가
books.push('jquery')
console.log(books)

books.push('vue')
console.log(books)

//앞에서 추가
books.unshift('react')
console.log(books)

//뒤에서 삭제
books.pop()
console.log(books)

//앞에서 삭제
books.shift()
console.log(books)

//splice 지정한 위치에서 추가,삭제
books.splice(2, 1, 'react', 'vue')
console.log(books)

//두개의 배열을 함침
const books2 = ['git', 'nodejs']
books.concat(books2)
const newBook = books.concat(books2)
console.log(newBook)

console.clear()

//5. 배열 검색
console.log(books)
console.log(books.indexOf('react'))
console.log(books.includes('css'))
console.log(books.includes('git'))
