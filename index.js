const quizObj = [
  {
    question: "Q1. What is the full form of HTML?",
    a: "Hello To My Lovely",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2   . What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "Q3. What is the full form of HTTP?",
    a: "HyperText Transfer Product",
    b: "HyperText Test Product",
    c: "HyperText Transfer Protocol",
    d: "Hey Transfer Product",
    ans: "ans3",
  },
  {
    question: "Q4. What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "Jordan Shoes",
    ans: "ans1",
  },
  {
    question: "Q5. Which tag is used for heading?",
    a: "<p></p>",
    b: "<h1></h1>",
    c: "<a></a>",
    d: "<div></div>",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const SubmitBtn = document.querySelector("#submit");
const AllInput = document.querySelectorAll("input");
const showScore = document.querySelector("#showScore");
const playAgainBtn = document.querySelector(".playAgainBtn");

let questionCount = 0;
let scoreCount = 0;

function loadQuestion() {
  const data = quizObj[questionCount];
  question.innerText = data.question;

  option1.innerText = data.a;
  option2.innerText = data.b;
  option3.innerText = data.c;
  option4.innerText = data.d;

  AllInput.forEach((checkBox) => {
    checkBox.checked = false;
  });
}

loadQuestion();

const getAnswer = () => {
  let answer;

  AllInput.forEach((item) => {
    if (item.checked) {
      answer = item.id;
    }
  });

  return answer;
};

SubmitBtn.addEventListener("click", () => {
  const checkAnswer = getAnswer();

  if (checkAnswer) {
    if (checkAnswer === quizObj[questionCount].ans) {
      scoreCount++;
    }
    questionCount++;
    if (questionCount < quizObj.length) {
      loadQuestion();
    } else {
      showScore.innerHTML = `
        <h2>Your Score is ${scoreCount}/${quizObj.length}</h2>
        `;

      showScore.classList.remove("ShowArea");
      playAgainBtn.classList.remove("active");
    }
  } else {
    return;
  }
});
