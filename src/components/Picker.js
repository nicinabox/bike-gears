import React from 'react'
import sizes from 'bicycle-tools/sizes'

export default class Picker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form className="">
          <div className="form-group col-sm-3">
            <label>Chainring</label>
            <select name="chainring"
              className="form-control c-select"
              value={this.props.gearing.chainring}
              onChange={this.props.onChange}>
              {sizes.chainrings.map((i) => {
                return <option value={i[0]}>{i[1]}</option>
              })}
            </select>
          </div>

          <div className="form-group col-sm-3">
            <label>Cog</label>
            <select name="cog"
              value={this.props.gearing.cog}
              className="form-control c-select"
              onChange={this.props.onChange}>
              {sizes.cogs.map((i) => {
                return <option value={i[0]}>{i[1]}</option>
              })}
            </select>
          </div>

          <div className="form-group col-sm-3">
            <label>Crank length</label>
            <select name="crank"
              value={this.props.gearing.crank}
              className="form-control c-select"
              onChange={this.props.onChange}>
              {sizes.cranks.map((i) => {
                return <option value={i[0]}>{i[1]}</option>
              })}
            </select>
          </div>

          <div className="form-group col-sm-3">
            <label>Wheel size</label>
            <select name="wheel"
              value={this.props.gearing.wheel}
              className="form-control c-select"
              onChange={this.props.onChange}>
              {sizes.wheels.map((group) => {
                return (
                  <optgroup label={group[0]}>
                    {group[1].map((i) => {
                      return <option value={i[0]}>{i[1]}</option>
                    })}
                  </optgroup>
                )
              })}
            </select>
          </div>

          <div className="form-group col-sm-3">
            <label>Cadence (RPM)</label>
            <input name="cadence"
              className="form-control"
              value={this.props.gearing.cadence}
              onChange={this.props.onChange} />
          </div>
        </form>
      </div>
    )
  }
}
