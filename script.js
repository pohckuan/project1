// NHO: Overall, nice job identifying the problem, then breaking your game down into logical steps -
// its cool to see that you built a reasonably complex game after only ~3 weeks!

// Ideas for future refactoring / consideration:

// In general, I recommend coming up with a certain structure or way of organizing your code
// so it is more readable / maintainable moving forward.

// This can be as a simple as consciously organizing your code so you have all variable declarations first,
// then your core function defintions, then, all your listeners,
// ultimately just some system that makes it easier for future you to go back and build on.

// Another idea that might help with all of your future features is to break your game into objects,
// (all the Nouns) and then you can create classes for your objects following the practices we learned about in OOJS.
// For example, you could make Game and/or Question classes.

console.log('Im a boss')
// function Submit(){
//   console.log("Submitted")
// };
var score = 0;
var currentQuestionindex = 0;

$(".choice").on("click", checkAnswer);
function checkAnswer(){
  if ($(this).attr("correct")){
    score ++
    console.log(score);
  }

// NHO: just a general note, its a good idea to remove commented out / unused code
// or leave work in progress features on a separate branch
// This is good habit to get into for when you show off your code to potential employers!


// $(document).ready(function() {
//   var doUpdate = function() {
//      $('.timer').each(function() {
//        var count = parseInt($(this).html());
//        if (count !== 0) {
//          $(this).html(count - 1);
//        }
//      });
//    };
//    setInterval(doUpdate, 1000);
// });
  // for (i=1 ; i<8; i++){
  //   if (value === answerArray[i])
  //   score ++;
  // }
}
// select radio
// on click
// get value
// if value == value in anasery answerArray
// score ++


// NHO: what if you abstracting this code into a function where you could pass in the correct index value
// and it would hide all questions but the questions index that you passed in
$(".question").hide()
$(".question").eq(0).show()
$(".next").on("click", goNext);
function goNext(event){
  event.preventDefault();
  currentQuestionindex++
  if (currentQuestionindex == $(".question").length+1){
    return
  }
  $(".question").hide()
  $(".question").eq(currentQuestionindex).show();


  console.log(currentQuestionindex)
  if (currentQuestionindex==9){
    $(".next").hide();
    $(".submit").show();
    $(".answer").show();
  }
}


$(".answer").hide();
$(".submit").hide();
// $(".submit").eq(0).show();
// $(".question").eq(currentQuestionindex===10).show();


$('.submit').click(function(event) {
  event.preventDefault();
  alert("You score: " + score + " out of " + "10"+" !")
});


// function calculateScore(){
//   for (i = 1 ; i < answerArray.length ; i ++){
//     if
//   }
// }


// NHO: potential pseudo-code for the timer:
  // When page loads, run startTimer function
    // startTimer function starts a setInterval running every second to decrement a value
    // Update the html with the timer's value
