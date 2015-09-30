import React from 'react';
import Picker from './Picker';
import Stats from './Stats';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gearing: {
        chainring: 46,
        cog: 16,
        crank: 165,
        wheel_diameter_inches: 27,
      }
    }

    this.handlePickerChange = this.handlePickerChange.bind(this)
  }

  handlePickerChange(e) {
    var { name, value } = e.currentTarget
    this.setState({
      gearing: {
        ...this.state.gearing,
        [name]: +value
      }
    })
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
