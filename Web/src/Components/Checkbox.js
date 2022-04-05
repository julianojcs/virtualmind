const Checkbox = ({ choice, order, index, checked }) => {
  return (
    <p>
      <input
        id={`checkbox${order}${index}`}
        type='checkbox'
        checked={checked}
      />
      <label htmlFor={`checkbox${order}${index}`}>{choice}</label>
    </p>
  )
}

export default Checkbox
