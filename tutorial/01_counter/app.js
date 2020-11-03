const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const reset = document.querySelector('.reset')
const btns = document.querySelectorAll('button')
console.log(btns)

const unit_price = 15000
let num = 1

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num

function printTotalPrice() {
  count.textContent = num
  sum.textContent = unit_price * num
}

// btns.forEach(function(itme) {

// })

btns.forEach((btn) => {
  console.log(btn)
  btn.addEventListener('click', function (e) {
    console.log(e.target.className)
    if (e.target.className === 'plus') {
      num++
      printTotalPrice()
    } else if (e.target.className === 'minus') {
      num--
      if (num <= 1) num = 1
      printTotalPrice()
    } else {
      num = 1
      printTotalPrice()
    }
  })
})

// plus.addEventListener('click', function () {
//   //할일
//   num++
//   printTotalPrice()
// })

// minus.addEventListener('click', function () {
//   //할일
//   num--
//   if (num <= 1) num = 1
//   printTotalPrice()
// })

// reset.addEventListener('click', function () {
//   //할일
//   num = 1
//   printTotalPrice()
// })
