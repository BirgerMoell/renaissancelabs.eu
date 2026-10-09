// Renaissance Labs — small progressive enhancements; the page works without this file.
document.documentElement.classList.add('js')

// reveal sections as they scroll into view
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
)
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

// run the hero's horizontal rule through the centre of the mark, like the logo's own cross-hairs
const mark = document.querySelector('.mark')
const hero = document.querySelector('.hero')
const placeAxis = () => {
  // offsetTop ignores the entrance animation's transform; the star sits just above the middle of the mark
  hero.style.setProperty('--mark-y', `${mark.offsetTop + mark.offsetHeight * 0.497}px`)
  hero.style.setProperty('--mark-b', `${mark.offsetTop + mark.offsetHeight * 0.96}px`)
}
if (mark && hero) {
  placeAxis()
  addEventListener('resize', placeAxis)
  mark.addEventListener('load', placeAxis)
}

// YouTube films load only when asked for; until then the poster is a plain link to the video
document.querySelectorAll('a.yt[data-yt]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault()
    const f = document.createElement('iframe')
    f.src = `https://www.youtube-nocookie.com/embed/${a.dataset.yt}?autoplay=1&rel=0`
    f.title = a.getAttribute('aria-label').replace(/^Play /, '')
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'
    f.allowFullscreen = true
    f.referrerPolicy = 'strict-origin-when-cross-origin'
    const box = document.createElement('div')
    box.className = 'yt'
    box.append(f)
    a.replaceWith(box)
  })
})

document.getElementById('year').textContent = new Date().getFullYear()
