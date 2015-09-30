import React from 'react'
import gearRatio from '../lib/gearRatio'
import gainRatio from '../lib/gainRatio'
import gearInches from '../lib/gearInches'
import development from '../lib/development'
import skidPatches from '../lib/skidPatches'
import Stat from './Stat'

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gearRatio: gearRatio(this.props.gearing),
      gainRatio: gainRatio(this.props.gearing),
      gearInches: gearInches(this.props.gearing),
      development: development(this.props.gearing),
      skidpatches: skidPatches(this.props.gearing),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gearRatio: gearRatio(nextProps.gearing),
      gainRatio: gainRatio(nextProps.gearing),
      gearInches: gearInches(nextProps.gearing),
      skidpatches: skidPatches(nextProps.gearing),
    })
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
