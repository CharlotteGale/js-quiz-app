document.getElementById("quizTitle").textContent = "Are You A Potterhead?";
document.getElementById("introPara").textContent =
  "A small quiz to test your knowledge on the world of Harry Potter.";

// create the variable to hold the questions, choices and answers.
const quizInfo = [
  {
    question: "Q1. What position does Harry play  in Quidditch",
    choices: ["Chaser", "Seeker", "Beater", "Keeper"],
    answer: "Seeker",
  },
  {
    question: "Q2. What is the name of Neville's toad?",
    choices: ["Trevor", "Fang", "Scabbers", "Crookshanks"],
    answer: "Trevor",
  },
  {
    question: "Q3. What is Ginny's patronus?",
    choices: ["A doe", "An otter", "A weasle", "A horse"],
    answer: "A horse",
  },
  {
    question: "Q4. What spell can be used to summon objects?",
    choices: ["Lumos", "Reducto", "Accio", "Protego"],
    answer: "Accio",
  },
  {
    question: "Q5. Who is the ghost of Hufflepuff?",
    choices: [
      "The Fat Friar",
      "The Bloody Baron",
      "Nearly Headless Nick",
      "The Grey Lady",
    ],
    answer: "The Fat Friar",
  },
  {
    question:
      "Q6. Who taught Care of Magical Creatures at Hogwarts before Hagrid?",
    choices: [
      "Silvanus Kettleburn",
      "Rubeus Hagrid",
      "Wilhelmina Grubbly-Plank",
      "Howin",
    ],
    answer: "Silvanus Kettleburn",
  },
  {
    question: "Q7. Who was the first to break out of Azkaban?",
    choices: [
      "Bellatrix Lestrange",
      "Antonin Dolohov",
      "Lucius Malfoy",
      "Sirius Black",
    ],
    answer: "Sirius Black",
  },
  {
    question: "Q8. How many Weasley children are there?",
    choices: ["5", "8", "7", "6"],
    answer: "7",
  },
  {
    question:
      "Q9. Dumbledore has a scare above his left knee that is a perfect map of what?",
    choices: [
      "The Scottish Highlands",
      "City of London",
      "The London Underground",
      "Diagon Alley",
    ],
    answer: "The London Underground",
  },
  {
    question: "Q10. What was Fred Weasley's code name on Potterwatch?",
    choices: ["Rapier", "Romulus", "River", "Royal"],
    answer: "Rapier",
  },
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const quiz = document.getElementById("quiz");

// create variables for scoring
let currentQuestion = 0;
let score = 0;

// create the function to display the question and choices
function showQuestion() {
  const question = quizInfo[currentQuestion];
  questionElement.innerText = question.question;

  choicesElement.innerHTML = "";
  question.choices.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    choicesElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

// create the function & if...else statement to either move onto the next question or finish the quiz and add the score
function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizInfo[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizInfo.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// get user input with the prompt, save it in a variable and print that variable to the console plus a message alert using the same variable
const hogwartsHouse = prompt("What is your Hogwarts House?");
console.log(hogwartsHouse);
window.alert(`Don't let ${hogwartsHouse} house down!`);

// create a function to clear the quiz container and replaced when results are called.
function showResult() {
  let resultHTML = `
      <h1>${score * 10} points to ${hogwartsHouse}</h1>
      <p>Your Score: ${score} / ${quizInfo.length}</p>
      <h2>Correct Answers:</h2>
      <ul>
      `;
  //   use a for loop to iterate through the questions and list out the answers.
  for (let i = 0; i < quizInfo.length; i++) {
    resultHTML += `
      <li>Question ${i + 1}: ${quizInfo[i].answer}</li>
    `;
  }
  resultHTML += `</ul>`;
  quiz.innerHTML = resultHTML;
}

showQuestion();
