var setups = ['A','B','C']
var responses = ['A1','B1','C1']

function newQuote() {
  var rand1 = Math.floor(Math.random()*(setups.length));
  var rand2 = Math.floor(Math.random()*(setups.length-1));
  if (rand2 >= rand1){
      rand2+=1;
  }
  document.getElementById('quoteDisplay').innerHTML = setups[rand1]+responses[rand2];
}
