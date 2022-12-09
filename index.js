
$(document).ready(function(){

  $("#paper").click(function (){
    clear()
      $('#paperMe').removeClass('hidden')
      var random = Math.floor(Math.random()*3) ;
      $('#imgPc img').eq(random).removeClass('hidden')
      checkWinner(random,0)
  })


$("#scissors").click(function (){
  clear()
  $('#scissorMe').removeClass('hidden')
  var random = Math.floor(Math.random()*3)

  $('#imgPc img').eq(random).removeClass('hidden')
  checkWinner(random,2)
  })


  $("#rock").click(function (){
    clear()
    $('#rockMe').removeClass('hidden')
    var random = Math.floor(Math.random()*3)
    $('#imgPc img').eq(random).removeClass('hidden')
    checkWinner(random,1)
  })

var counterMe = 0
var counterPc = 0
function checkWinner(pcHand,myHand) {
  

  if(pcHand === 1 && myHand === 0){
   counterMe = counterMe +1 
  $('#me').empty()
  $('#me').text(counterMe)
  }
  else if (pcHand === 1 && myHand === 2){
    counterPc = counterPc +1 
  $('#pc').empty()
  $('#pc').text(counterPc)
  }
  else if(pcHand === 0 && myHand === 1){
    counterPc = counterPc +1 
  $('#pc').empty()
  $('#pc').text(counterPc)
  }
  else if (pcHand === 0 && myHand === 2){
    counterMe = counterMe +1 
  $('#me').empty()
  $('#me').text(counterMe)
  }
  else if (pcHand === 2 && myHand === 0){
    counterPc = counterPc +1 
  $('#pc').empty()
  $('#pc').text(counterPc)
  }
  else if (pcHand === 2 && myHand === 1 ){
    counterMe = counterMe +1 
  $('#me').empty()
  $('#me').text(counterMe)
  }}


$('#reset').click(function(){

  
  counterMe = 0
  counterPc = 0
  $('#me').empty()
  $('#me').text(counterMe)

  $('#pc').empty()
  $('#pc').text(counterPc)
    
  })

})

function clear(){
  $('#imgPc img').addClass('hidden')
  $('#imgMe img').addClass('hidden')
}


















