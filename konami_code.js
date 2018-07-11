const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  // get the body element
  
  const body = document.getElementByTagName('body')
  let index = 0
  //setup listener
  body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = e.key
    if (key === codes[index]) {
      index++
      if (index === codes.length) {
        alert('Hurray!')
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
