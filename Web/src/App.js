import { useEffect } from 'react'
import useFetch from './Hooks/useFetch'
import { QUESTIONS_GET } from './Api'
import Error from './Helper/Error'
import Question from './Components/Question'

const App = () => {
  const { data: questions, loading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = QUESTIONS_GET()
    request(url, options)
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <div>Loading...</div>
  if (questions) {
    return (
      <div>
        {questions.map((question) => (
          <Question key={question.order} question={question} />
        ))}
      </div>
    )
  } else return null
}
export default App
