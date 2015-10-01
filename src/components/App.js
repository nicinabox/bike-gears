import React from 'react'
import Picker from './Picker'
import Stats from './Stats'
import history from '../history'

const initialState = {
  gearing: {
    chainring: 46,
    cog: 16,
    crank: 165,
    wheel: 622,
    cadence: 90,
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    var urlState = history.get()
    if (urlState) {
      this.state = { gearing: urlState }
    } else {
      this.state =  initialState
    }

    this.handlePickerChange = this.handlePickerChange.bind(this)
  }

  componentDidMount() {
    window.onhashchange = () => {
      this.setState({
        gearing: history.get()
      })
    }
  }

  handlePickerChange(e) {
    var { name, value } = e.currentTarget
    var newState = {
      gearing: {
        ...this.state.gearing,
        [name]: +value
      }
    }
    history.replace(newState.gearing)
    this.setState(newState)
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <Stats gearing={this.state.gearing} />

        <div className="row">
          <div className="col-sm-12">
            <Picker gearing={this.state.gearing} onChange={this.handlePickerChange} />
          </div>
        </div>

      </div>
    )
  }
}

var styles = {
  container: {
    marginTop: 80,
    marginBottom: 80
  }
}
