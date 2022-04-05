import Choices from './Choices'
const Question = ({ question, answer }) => {
  const orderedQuestion = `${question.order} - ${question.question}`
  return (
    <>
      <p style={{ fontWeight: 'bold' }}>{orderedQuestion}</p>
      <Choices
        choices={question.choices}
        order={question.order}
        type={question.type}
        checked={answer}
      />
      {question?.textAnswer}
    </>
  )
}

export default Question
