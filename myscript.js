const questionList = document.getElementsByClassName("q");
const answerList = document.getElementsByClassName("answer");
const arrowList = document.getElementsByClassName("arrow");
let answer = null;
let arrow = null;

for (let i = 0; i < questionList.length; i++) {
  questionList[i].addEventListener("focus", function () {
    if (answer && answerList[i] != answer) {
      answer.style.display = "none";
      arrowList[i].style.transform = "none";
    }

    answer = answerList[i];
    arrow = arrowList[i];
    answer.style.display = "block";
    arrowList[i].style.transform = "scaleY(-1)";
    
    questionList[i].addEventListener("blur", function () {
      answer.style.display = "none";
      arrowList[i].style.transform = "none";
    });
  });
}
