// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    input: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({input: value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="bgContainer">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="inputContainer">
            <label className="text" htmlFor="input">
              Enter the phrase
            </label>
            <input
              className="input"
              id="input"
              onChange={this.onChangeInputPhrase}
              placeholder="Enter the phrase"
              type="text"
              value={input}
            />
          </div>
          <p className="button">No.of letters: {input.length}</p>
        </div>
        <img
          alt="letters calculator"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
