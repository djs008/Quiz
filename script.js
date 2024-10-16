document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    let score = 0; 

    
    const correctAnswers = [
        'Counting Principle', // Q1
        '9',     // Q2
        'Compound Event', // Q3
        'Permutation', // Q4
        '6',   // Q5
        'Combination',  // Q6
        'Sample Space', // Q7
        'Simple Event', // Q8
        'Probability',     // Q9
        '142,500'    // Q10
    ];

    for (let i = 1; i <= 10; i++) {
        const answer = document.getElementById(`q${i}`).value.trim(); 
        
        
        if (answer.toLowerCase() === correctAnswers[i - 1].toLowerCase()) {
            score += 2; 
        }
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>${username}'s Total Score: ${score} / 20</h2>`; 
});
