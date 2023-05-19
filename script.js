function submitQuiz() {
    const question1Answer = document.querySelector('input[name="question1"]:checked').value;

    const question2Answer = document.querySelector('input[name="question1"]:checked').value;
    
    const question3Answer = document.querySelector('input[name="question3"]:checked').value;
    
    const question4Answer = document.querySelector('input[name="question4"]:checked').value;
    
    const question5Answer = document.querySelector('input[name="question5"]:checked').value;
    
    const question6Answer = document.querySelector('input[name="question6"]:checked').value;
    
    const question7Answer = document.querySelector('input[name="question7"]:checked').value;
    
    const question8Answer = document.querySelector('input[name="question8"]:checked').value;
    
    const question9Answer = document.querySelector('input[name="question9"]:checked').value;
    
    const question10Answer = document.querySelector('input[name="question10"]:checked').value;
    

    const score = calculateScore(question1Answer, question2Answer,question3Answer,question4Answer,question5Answer,question6Answer,question7Answer,question8Answer,question9Answer,question10Answer);
    displayResult(score);
  }
  
  function calculateScore(answer1, answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10) {
    let score = 0;
  
    if (answer1 === 'a') {
      score++;
    }
    if (answer2 === 'a') {
      score++;
    }
  
    if (answer3 === 'a') {
        score++;
      }
      
    if (answer4 === 'b') {
        score++;
      }
      
    if (answer5 === 'c') {
        score++;
      }
      
    if (answer6 === 'a') {
        score++;
      }
      
    if (answer7 === 'c') {
        score++;
      }
       
    if (answer8 === 'a') {
        score++;
      }
      
    if (answer9 === 'b') {
        score++;
      }
      
    if (answer10 === 'b') {
        score++;
      }
     
    return score;
  }
  
  function displayResult(score) {
    const resultSection = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your score: ${score}/10`;
    resultSection.style.display = 'block';
  }
  