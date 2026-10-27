// Renaissance Labs — small progressive enhancements; the page works without this file.

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
