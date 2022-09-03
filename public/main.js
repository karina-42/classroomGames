const btn = document.getElementById('display-question')
btn.addEventListener('click', displayQuestion)
const questionLine = document.querySelector('.question-line')

function displayQuestion() {
  console.log(questionLine)
  questionLine.textContent = 'hi'
}