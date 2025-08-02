const base = 'https://images.priceshoes.digital/catalogos/1254768_'
const total = 483
let current = 1

const img = document.getElementById('catalog-img')

function update() {
  img.src = `${base}${current}.jpg`
}

function next() {
  current = current >= total ? 1 : current + 1
  update()
}

function prev() {
  current = current <= 1 ? total : current - 1
  update()
}

document.getElementById('next').addEventListener('click', next)
document.getElementById('prev').addEventListener('click', prev)

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
})

let startX = null

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX
})

document.addEventListener('touchend', e => {
  if (startX === null) return
  const diff = e.changedTouches[0].clientX - startX
  if (diff > 50) prev()
  else if (diff < -50) next()
  startX = null
})

update()
