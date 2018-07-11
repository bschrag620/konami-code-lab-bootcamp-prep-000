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
  
  //create variable for documnet.body object
  
  const body = document.getElementById('main')
  
  //keep track of progess
  let index = 0
  
  //setup event ad
  body.addEventListener('keydown', function onKeyPressHandler(e) {
    const key = e.key
    
    alert(key)
    
    if (key === codes[index]) {
      index++
      
      if (index === codes.length-1) {
        alert('Congrats!')
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
