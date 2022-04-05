const Radio = ({ choice, order, index }) => {
  return (
    <p>
      <input id={`radio${order}${index}`} name={`radio${order}`} type='radio' />
      <label htmlFor={`radio${order}${index}`}>{choice}</label>
    </p>
  )
}

export default Radio
