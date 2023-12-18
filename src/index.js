const [aside, body, backdrop] = ['aside', 'body', '.backdrop'].map((item) =>
  document.querySelector(item)
)

function showMenu() {
  const lockPadding =
    window.innerWidth - document.querySelector('.container').offsetWidth + 'px'
  aside.classList.add('is-visibility')
  body.style = `
    overflow:hidden;
    padding-right:${lockPadding}
  `
  backdrop.classList.add('is-open')
  window.addEventListener('keydown', closeMenuByesc)
}

function hideMenu(event) {
  if (
    event.target.closest('.menu_list') ||
    event.target.className === 'backdrop is-open'
  ) {
    aside.classList.remove('is-visibility')
    body.removeAttribute('style')
    backdrop.classList.remove('is-open')
  }
}
function closeMenuByesc() {
  if (body.querySelector('.backdrop.is-open')) {
    aside.classList.remove('is-visibility')
    body.removeAttribute('style')
    backdrop.classList.remove('is-open')
  }
  window.removeEventListener('keydown', closeMenuByesc)
}
