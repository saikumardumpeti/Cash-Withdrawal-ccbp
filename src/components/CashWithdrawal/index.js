// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  onClickButton = value => {
    this.setState(prevState => ({
      rupees: prevState.rupees - parseInt(value),
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state
    return (
      <div className="app-container">
        <div className="cash-container">
          <div className="name-container">
            <p className="name-logo">S</p>
            <p className="name">Sai</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p>{rupees}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="money-container">
            <p className="withdraw-heading">Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominations">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationsList={eachItem}
                key={eachItem.id}
                onClickButton={this.onClickButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
