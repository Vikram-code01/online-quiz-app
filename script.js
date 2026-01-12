// QUESTIONS
const questions = [
  {
    q: "2 + 2 = ?",
    o: ["3", "4", "5"],
    a: 1
  },
  {
    q: "Capital of India?",
    o: ["Delhi", "Mumbai", "Patna"],
    a: 0
  },
  {
    q: "HTML stands for?",
    o: ["Hyper Text Markup Language","huper text mark of language", "High Text Machine"],
    a: 0
  }
];

let index = 0;
let score = 0;

// START QUIZ
function startQuiz() {
  document.getElementById("startBox").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  index = 0;
  score = 0;
  loadQuestion();
}

// LOAD QUESTION
function loadQuestion() {
  document.getElementById("question").innerText = questions[index].q;

  let html = "";
  questions[index].o.forEach((opt, i) => {
    html += `
      <label>
        <input type="radio" name="opt" value="${i}"> ${opt}
      </label>
    `;
  });

  document.getElementById("options").innerHTML = html;
}

// NEXT QUESTION
function nextQuestion() {
  let selected = document.querySelector('input[name="opt"]:checked');

  if (!selected) {
    alert("Select an option");
    return;
  }

  if (parseInt(selected.value) === questions[index].a) {
    score++;
  }

  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quizBox").style.display = "none";
    document.getElementById("resultBox").style.display = "block";
    document.getElementById("result").innerText =
      "Score: " + score + " / " + questions.length;
  }
}

// RESTART
function restartQuiz() {
  document.getElementById("resultBox").style.display = "none";
  document.getElementById("startBox").style.display = "block";
}
