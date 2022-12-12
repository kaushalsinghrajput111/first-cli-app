let score=0;
let questions=[{
  question:"what is my name",
  answer:"kaushal"
},
  {
  question:"what's my favourite recepie",
  answer:"sebai"
},
    {
  question:"who do i do ",
  answer:"coding"
},
      {
  question:"where am i live",
  answer:"kushaha"
},
        {
  question:"what i want to be",
  answer:"web developer"
}
]
const welcome =()=>{
  let userName = prompt("what is your name?")
  userName = userName.toUpperCase()
  console.log("welcome " +(userName)+" to my quiz")
  console.log("Please play this quiz")
}
const playGames = ()=>{
  let quizPlay= prompt("do you play this quiz")
  if(quizPlay==="yes"||quizPlay==="YES"|| quizPlay==="Yes"){
    console.log("Please write everything in small letter")
    for (let i = 0; i < questions.length; i++) {
      let p=(prompt(questions[i].question))
      
     if(p  == questions[i].answer){
       score = score+1;
console.log(` you are correctly guess right answer \n User answer: ${p}\n your score:${score}`)

    }
      else{
        score = score-1;
        console.log(` your are wrong  answer is:${questions[i].answer} \n User answer: ${p} \n your score:${score}`)
      }
      }
  
  if(score>4){
    console.log(
  `Your final score is:${score} \n I am very happy 🥳🥳🥳🥳\n you are everything know about kaushal`
    )
  }
  else if(score>3){
    console.log(
     `Your final score is:${score} \n Not bad 😊  you are something  know about kaushal`)
  }
  else{
    console.log(
    `Your final score is:${score} \n  bad 😒  you are nothing  know about kaushal`)
  }}
  else{
    console.log("Please you leave my quizz")
  }
}
 welcome();
playGames();