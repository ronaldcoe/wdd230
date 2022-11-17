const container = document.getElementById('container') ;
const cursor = document.getElementById('cursor') ;
var wid = parseFloat(getComputedStyle(container).width) ;
var hei = parseFloat(getComputedStyle(container).height) ;

var size = (wid * hei) / 9500 ;

function randomm(min , max){
  return min + Math.random() * ( max  - min )
}

for (let i = 0 ; i < size ; i++){
  let star = document.createElement('div');
  
  let o_size = randomm(8,10) ;
  let o_co = `rgba(255,255,255,${randomm(.02,.8)})` ;
  
  star.style.position = 'relative' ;
  star.style.top = randomm(0 , 100 - ( size / 6 )) + "%" ;
  star.style.left = randomm(0 , 100) + "%" ;
  star.style.width = o_size + 'px' ;
  star.style.height = o_size + 'px' ;
  star.style.borderRadius = '50%' ;
  star.style.backgroundColor = "white" ;
  star.classList.add('a_star')
//   star.style.boxShadow = `0 0 ${8+ o_size}px `+ o_co ;
  star.style.boxShadow = "0px 0px 6px 3px rgb(250 250 250 / 64%)"
  star.animate(
    [
      { opacity : 0  } ,
      { opacity : 1  }
    ],{
      duration : randomm(1000,2000) ,
      easing : 'linear' ,
      iterations : Infinity , 
      direction : 'alternate'
    })
  container.appendChild(star) ;
}

// document.body.addEventListener('mousemove',(e)=>{
//   cursor.style.left = (e.pageX - 100) + 'px' ;
//   cursor.style.top = (e.pageY - 100) + 'px' ;
// })


 

  
// e_Left = target.offsetLeft ;
// p_min_Left = target.parentNode.offsetLeft  ;
// p_max_Left = window.innerWidth - target.parentNode.offsetLeft ;
// key = 90 / ( p_max_Left - p_min_Left ) ;
// num = (e_Left * key) + ((e_Left - p_min_Left) * key) ;
