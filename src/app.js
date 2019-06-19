require('./style.scss')

console.log('js loaded')

const elems = document.getElementsByClassName('animate')

console.log(elems)

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
