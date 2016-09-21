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
  alert("You score" + score + " out of " + "10")
});


// function calculateScore(){
//   for (i = 1 ; i < answerArray.length ; i ++){
//     if
//   }
// }
