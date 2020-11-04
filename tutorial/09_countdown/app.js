//오늘날짜의 요일

// const days = ['일', '월', '화', '수', '목', '금', '토']
// const now = new Date()
// const today = now.getDay()
// console.log(days[today])

//특정날짜 요일
// const days = ['일', '월', '화', '수', '목', '금', '토']
// const eventDay = new Date('2020-12-25')
// const theday = eventDay.getDay()
// console.log(days[theday])

const week = ['일', '월', '화', '수', '목', '금', '토']
const lastDay = document.getElementById('last_day')

const dDay = new Date(2020, 11, 24, 18, 0)
const year = dDay.getFullYear()
const month = dDay.getMonth() + 1
const date = dDay.getDate()
const day = week[dDay.getDay()]
const hour = dDay.getHours()
const minute = dDay.getMinutes()

lastDay.textContent = `${year}년 ${month}월 ${date} (${day}) ${hour}: 0${minute}`

const conutDowm = document.getElementById('countdown')
const clocks = conutDowm.querySelectorAll('h3')

function tick() {
  const dDayTime = dDay.getTime()
  const nowTime = new Date().getTime()

  const t = dDayTime - nowTime

  // 남은 시간 표시
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
  const secondes = Math.floor((t % (1000 * 60)) / 1000)

  const times = [days, hours, minute, secondes]

  function addZero(i) {
    if (i < 10) {
      return (i = `0${i}`)
    } else {
      return i
    }
  }

  clocks.forEach((item, index) => {
    item.innerHTML = addZero(times[index])
  })

  if (t < 0) {
    clearInterval(timer)
    conutDowm.innerHTML = '<h3> 수고하셨습니다.</h3>'
  }
}

tick()

const timer = setInterval(tick, 1000)
