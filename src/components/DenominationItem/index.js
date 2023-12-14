// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, onClickButton} = props
  const {value} = denominationsList
  const onDenomination = () => {
    onClickButton(value)
  }
  return (
    <li className="money-value">
      <button type="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
