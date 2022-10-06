//HAM NAV
let state = false

function burgerButton () {
    let nav = document.getElementById('barbar')

    if(state==false){
        nav.style.display = 'flex'
        state = true
    }else if(state == true){
        nav.style.display = 'none'
        state = false
    }
}

// Image Slider
$(document).ready(function(){
  let x = 0
  function swp() {
      if(x<2){
          $('.slider').animate({
              'left': '-=100%'
          }, 2000)
          x+=1;
      }else{
          $('.slider').animate({
              'left': '+=200%'
          })
          x = 0
      }
  }
  setInterval(swp,1000)
})

