function startQuiz() {
  document.body.style.backgroundColor = "lightgreen";
  document.getElementById("result").innerHTML =
    "<h2>Quiz Started Successfully!</h2>";

  document.querySelector("button").disabled = true;
}
