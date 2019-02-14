var disclaimers = ["Hey, I haven't obscured this at all, so welcome to the code.",
 "Should you take issue with any of these lines, once you pair them up, please let me know and I'll point you in direction of the source",
"I kept these mostly gender-neutral but there's a general male-speaking-to-female dynamic so watch out, don't put all your hopes in this basket"];
var setups = ['Are you my little toe?',
'Are you heroin?',
'Is your name Luke?'
'C7',
"Are you not-sand?",
'Please have sex with me?',
'Have you heard of "Imagine Dragons"?',
'Hey, want some updog?'
"How much does a polar bear weigh?",
"Don't you agree, pens should be like women?",
"Bags should be like women.",
"Are you a toaster?"
]
var responses = ['Because I want to bang you on all my furniture',
"Because despite everything I've been told, I wanna do you",
"Because I'm your daddy",
"Oh sorry, I thought this was a vending machine - because you're a snack!"
"Because I don't like you. You're not coarse and not rough and not irritating and don't get everywhere",
"I'm very lonely and you're so attractive",
"Imagine draggin' these balls across your face",
"Nothing much dog, what's up with you?"
"Not enough to break the ice - if polar bears did weigh that much they'd be in trouble",
"Disposable.",
"Simple and with one lockable opening",
"Because get in my bath!",
]

function newQuote() {
  var rand1 = Math.floor(Math.random()*(setups.length));
  var rand2 = Math.floor(Math.random()*(setups.length-1));
  if (rand2 >= rand1){
      rand2+=1;
  }
  document.getElementById('quoteDisplay').innerHTML = setups[rand1]+" "+responses[rand2];
}
