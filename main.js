var quotes = [
  {
    quote: "Be yourself; everyone else is already taken",
    owner: "― Oscar Wilde",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    owner: "― Marilyn Monroe",
  },
  {
    quote: "So many books, so little time.",
    owner: "― Frank Zappa",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    owner: "― Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    owner: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    owner: "― Bernard M. Baruch",
  },
  {
    quote: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth`,
    owner: "― William W. Purkey",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    owner: "― Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    owner: "― Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    owner: "― Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    owner: "― Robert Frost",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    owner: "― J.K. Rowling",
  },
  {
    quote: `dont walk in front of me… I may not follow
dont walk behind me… I may not lead
Walk beside me… just be my friend`,
    owner: "― Albert Camus",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    owner: "― Mark Twain",
  },
  {
    quote: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
    owner: "― C.S. Lewis",
  },
];
var lastQuote;

document.getElementById("btnJs").addEventListener("click", function () {
  var randomQuote = Math.floor(Math.random() * quotes.length);

  if (lastQuote === randomQuote) {
    randomQuote = Math.floor(Math.random() * quotes.length);
  } else {
    lastQuote = randomQuote;
    document.getElementById("quote").innerHTML = quotes[randomQuote].quote;
    document.getElementById("owner").innerHTML = quotes[randomQuote].owner;
    console.log(randomQuote);
  }
});
