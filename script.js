document.getElementById('submit-btn').addEventListener('click', function() {
    const answer1 = document.querySelector('input[name="question1"]:checked').value;
    const answer2 = document.querySelector('input[name="question2"]:checked').value;
    const answer3 = document.querySelector('input[name="question3"]:checked').value;
    const answer4 = document.querySelector('input[name="question4"]:checked').value;
    const answer5 = document.querySelector('input[name="question5"]:checked').value;
    const answer6 = document.querySelector('input[name="question6"]:checked').value;
    const answer7 = document.querySelector('input[name="question7"]:checked').value;
    const answer8 = document.querySelector('input[name="question8"]:checked').value;
    const answer9 = document.querySelector('input[name="question9"]:checked').value;
    const answer10 = document.querySelector('input[name="question10"]:checked').value;
    const answer11 = document.querySelector('input[name="question11"]:checked').value;
    const answer12 = document.querySelector('input[name="question12"]:checked').value;
    const answer13 = document.querySelector('input[name="question13"]:checked').value;
    const answer14 = document.querySelector('input[name="question14"]:checked').value;
    const answer15 = document.querySelector('input[name="question15"]:checked').value;
    const answer16 = document.querySelector('input[name="question16"]:checked').value;
    const answer17 = document.querySelector('input[name="question17"]:checked').value;
    const answer18 = document.querySelector('input[name="question18"]:checked').value;
    const answer19 = document.querySelector('input[name="question19"]:checked').value;
    const answer20 = document.querySelector('input[name="question20"]:checked').value;
    const answer21 = document.querySelector('input[name="question21"]:checked').value;
    const answer22 = document.querySelector('input[name="question22"]:checked').value;
    const answer23 = document.querySelector('input[name="question23"]:checked').value;
    const answer24 = document.querySelector('input[name="question24"]:checked').value;
  
    let score = 0;
  
    if (answer1 === 'b') {
      score++;
    }
    if (answer2 === 'a') {
      score++;
    }
    if (answer3 === 'c') {
        score++;
    }
    if (answer4 === 'b') {
        score++;
    }
    if (answer5 === 'c') {
        score++;
    }
    if (answer6 === 'b') {
        score++;
    }
    if (answer7 === 'c') {
        score++;
    }
    if (answer8 === 'a') {
        score++;
    }
    if (answer9 === 'a') {
        score++;
    }
    if (answer10 === 'b') {
        score++;
    }
    if (answer11 === 'c') {
        score++;
    }
    if (answer12 === 'a') {
        score++;
    }
    if (answer13 === 'c') {
        score++;
    }
    if (answer14 === 'b') {
        score++;
    }
    if (answer15 === 'c') {
        score++;
    }
    if (answer16 === 'b') {
        score++;
    }
    if (answer17 === 'b') {
        score++;
    }
    if (answer18 === 'b') {
        score++;
    }
    if (answer19 === 'a') {
        score++;
    }
    if (answer20 === 'b') {
        score++;
    }
    if (answer21 === 'a') {
        score++;
    }
    if (answer22 === 'a') {
        score++;
    }
    if (answer23 === 'b') {
        score++;
    }
    if (answer24 === 'a') {
        score++;
    }

    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
  
    resultText.textContent = `Молодец! ${score}/24`;
    resultContainer.classList.remove('hidden');
  });
  