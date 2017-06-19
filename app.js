function multiples() {
  var numbers = [];
  
  for(var i = 1000; i >= numbers.length; i--) {
    
    if(i % 5 === 0 || i % 3 === 0) {
      numbers.push(i);
    }
    
  }
  return numbers.reduce(function(a,b) {
    return a+b;
  });
  
}

document.getElementById('app').innerHTML = multiples();