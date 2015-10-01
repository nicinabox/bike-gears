import React from 'react'
import Stat from './Stat'
import {
  gearRatio, gainRatio, gearInches, development, skidpatches, speed
} from 'bicycle-tools/formulas'

var getState = (gearing) => {
  return {
    gearRatio: gearRatio(gearing),
    gainRatio: gainRatio(gearing),
    gearInches: gearInches(gearing),
    development: development(gearing),
    skidpatches: skidpatches(gearing),
    speed: speed(gearing),
  }
}

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.state = getState(this.props.gearing)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(getState(nextProps.gearing))
  }

  render() {
    return (
      <div id="stats" style={styles.stats}>
        <div className="row">
          <div className="col-sm-2">
            <Stat label="Gear Ratio" value={this.state.gearRatio} />
          </div>

          <div className="col-sm-2">
            <Stat label="Gain Ratio" value={this.state.gainRatio} />
          </div>

          <div className="col-sm-2">
            <Stat label="Gear Inches" value={this.state.gearInches} unit="in" />
          </div>

          <div className="col-sm-2">
            <Stat label="Development" value={this.state.development} unit="m" />
          </div>

          <div className="col-sm-2">
            <Stat label="Skid Patches" value={this.state.skidpatches} />
          </div>

          <div className="col-sm-2">
            <Stat label={`Speed @ ${this.props.gearing.cadence}RPM`} value={this.state.speed} unit="m/s" />
          </div>
        </div>
      </div>
    )
  }
}

var styles = {
  stats: {
    marginBottom: 50
  }
}
