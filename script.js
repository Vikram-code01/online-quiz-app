 function startQuiz() {
  document.body.style.backgroundColor = "lightgreen";
  document.getElementById("startBtn").disabled = true;

  document.getElementById("quiz").innerHTML = `
    <h2>Q1. HTML stands for?</h2>

    <button onclick="answer(true)">Hyper Text Markup Language</button><br><br>
    <button onclick="answer(false)">High Text Machine Language</button><br><br>
    <button onclick="answer(false)">Hyperlinks Text Mark Language</button><br><br>
    <button onclick="answer(false)">None of these</button>
  `;
}

function answer(correct) {
  if (correct) {
    document.getElementById("result").innerHTML =
      "<h2>Correct Answer ✅</h2>";
  } else {
    document.getElementById("result").innerHTML =
      "<h2>Wrong Answer ❌</h2>";
  }
}
