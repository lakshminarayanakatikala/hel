const quizData = [
    {
      question: "What does CSS stand for?",
      choices: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Syntax",
        "Colorful Style Syntax",
      ],
      correct: 0,
    },
    {
      question: "Which property is used to change text color in CSS?",
      choices: ["font-color", "color", "text-color", "style-color"],
      correct: 1,
    },
    {
      question: "Which HTML tag is used to link an external CSS file?",
      choices: ["<style>", "<link>", "<script>", "<css>"],
      correct: 1,
    },
    {
      question: "Which JavaScript method is used to write into the console?",
      choices: ["console.log()", "log.console()", "print()", "write.console()"],
      correct: 0,
    },
    {
      question: "How do you declare a variable in JavaScript?",
      choices: ["var", "let", "const", "All of the above"],
      correct: 3,
    },
    {
      question: "Which CSS property is used to set the background color?",
      choices: ["bg-color", "background", "background-color", "color"],
      correct: 2,
    },
    {
      question: "What does `===` in JavaScript mean?",
      choices: [
        "Assignment operator",
        "Equal value and type",
        "Comparison with coercion",
        "None of the above",
      ],
      correct: 1,
    },
    {
      question: "Which function is used to parse a string to an integer in JavaScript?",
      choices: ["parseInt()", "toInteger()", "parse()", "int()"],
      correct: 0,
    },
    {
      question: "How do you select an element with the ID 'header' in CSS?",
      choices: ["#header", ".header", "header", "*header"],
      correct: 0,
    },
    {
      question: "What is the output of '2' + 2 in JavaScript?",
      choices: ["4", "22", "Error", "Undefined"],
      correct: 1,
    },
  ];
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    choicesEl.innerHTML = "";
    currentQuizData.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectChoice(index));
      choicesEl.appendChild(li);
    });
  }
  
  function selectChoice(selected) {
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `${score}/${quizData.length}`;
    submitBtn.classList.add("hidden");
  }
  
  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultEl.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    loadQuiz();
  });
  
  loadQuiz();
  