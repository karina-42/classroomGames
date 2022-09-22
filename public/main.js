// const btn = document.getElementById('display-question')
// btn.addEventListener('click', displayQuestion)
// const questionLine = document.querySelector('.question-line')

// function displayQuestion() {
//   fetch('/oneQuestion', {method: 'GET'})
//   .then(function(response) {
//     console.log(response);
//     if(response.ok) return response.jason()
//     throw new Error('Request failed')
//   })
//   .then(function(data) {
//     questionLine.innerHTML = `data`
//   })
//   .catch(function(error) {
//     console.log(error);
//   })
//   console.log(questionLine)
// }

// const btn2 = document.getElementById('display-all-questions')
// btn2.addEventListener('click', displayAllQuestions)

// function displayAllQuestions() {
//   fetch('lineRow/getQuestions', {method: 'GET'})
//   .then(function(response) {
//     console.log(response);
//   })
// }