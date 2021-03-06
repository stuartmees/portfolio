import './style.scss'

const elems = document.getElementsByClassName('animate')


function isInView(elem) {
  const docViewTop = window.pageYOffset
  const docViewBottom = docViewTop + window.innerHeight
  const elemTop = elem.offsetParent.offsetTop + elem.offsetTop
  const elemBottom = elemTop + elem.offsetHeight
  return ( (elemTop>docViewTop && elemTop<docViewBottom) || (elemBottom>docViewTop && elemBottom<docViewBottom) )
}

document.onscroll = function() {
  Array.from(elems).forEach(elem => {
    if (isInView(elem)) {
      elem.classList.add('fade')
    }
  })
}
