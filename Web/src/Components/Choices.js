import Checkbox from './Checkbox'
import Radio from './Radio'

const Choices = ({ choices, order, type, checked }) => {
  return (
    <div>
      {choices?.map((choice, index) => {
        if (type === 'checkbox')
          return (
            <Checkbox
              key={index}
              choice={choice}
              order={order}
              index={index}
              checked={checked}
            />
          )
        else if (type === 'radio')
          return (
            <Radio key={index} choice={choice} order={order} index={index} />
          )
        else return null
      })}
    </div>
  )
}

export default Choices
