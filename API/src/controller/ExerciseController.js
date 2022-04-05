const questions = [
  {
    order: "D",
    type: "checkbox",
    question: "What kind of language is Javascript? (remember, more than one (or none) options are possible)",
    choices: [
      "Strongly typed",
      "Weakly typed",
      "Dynamic",
      "Prototype based",
      "Functional",
      "Static",
      "Structured"
    ],
    textAnswer: null
  },
  {
    order: "E",
    type: "checkbox",
    question: "Mark which of the following characteristics Javascript presents",
    choices: [
      "Polymorphism",
      "Inheritance",
      "Encapsulation",
      "Dynamic binding (The ability to switch an object’s method at runtime)",
      "Open recursion (Characteristic that implies that the “this” reference is dynamically bound)"
    ],
    textAnswer: null
  },
  {
    order: "F",
    type: "radio",
    question: "Is Javascript Object Oriented?",
    choices: [
      "Yes",
      "No"
    ],
    textAnswer: "Briefly describe why:"
  },
  {
    order: "G",
    type: "checkbox",
    question: "What does a closure allow in Javascript?",
    choices: [
      "Encapsulating code inside the scope of a function",
      "Allows declared variables to be accessible inside child scopes and inaccessible from parent scopes.",
      "Allows declared variables to be accessible inside parent scopes and inaccessible from child scopes.",
      "Currying",
      "Event Bubbling"
    ],
    textAnswer: null
  },
  {
    order: "H",
    type: "checkbox",
    question: "How would you deal with global scope in Javascript?",
    choices: [
      "Encapsulating components in functions",
      "Using AMD or CommonJS Modules",
      "Putting all the components under a same object",
      "Using global variables"
    ],
    textAnswer: null
  }
]
const answers = [
  {
    order: "D",
    answerIndexes: [1,2,3,4]
  },
  {
    order: "E",
    answerIndexes: [0,1,2,3,4]
  },
  {
    order: "F",
    answerIndexes: [1],
    textAnswer: "JavaScript can function as a procedural and an object oriented language. Javascript provides some features to implement object-oriented programs, such as polymorphism, encapsulation, inheritance (via prototyping), so it is a prototype-based language (not a class-based object-oriented)."
  },
  {
    order: "G",
    answer: [0,1,3,4]
  },
  {
    order: "H",
    answerIndexes: [0,1]
  },
]

const getQuestions = async (req, res) => {
  return new Promise (resolve => setTimeout(() => {
    resolve(res.status(200).json(questions))
  }, 1000))
}

const getQuestion = async (req, res) => {
  const result = questions.find(question => question.order.toLowerCase()===req.params.order.toLowerCase())
  return new Promise (resolve => setTimeout(() => {
    if (result)
      resolve(res.status(200).json(result))
    else
      resolve(res.status(404).json({error: 'Pergunta não encontrada'}))
  }, 1000))
}

const getAnswers = async (req, res) => {
  return new Promise (resolve => setTimeout(() => {
    resolve(res.status(200).json(answers))
  }, 1000))
}

const getAnswer = async (req, res) => {
  const result = answers.find(answer => answer.order.toLowerCase()===req.params.order.toLowerCase())
  return new Promise (resolve => setTimeout(() => {
    if (result)
      resolve(res.status(200).json(result))
    else
      resolve(res.status(404).json({error: 'Resposta não encontrada'}))
  }, 1000))
}
module.exports = {
  getQuestions,
  getAnswers,
  getQuestion,
  getAnswer
}