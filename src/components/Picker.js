import React from 'react'
import mapValues from '../lib/mapValues'
import crankSizes from '../sizing/crank'

export default class Picker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form className="">
          <div className="form-group col-sm-4">
            <label>Chainring</label>
            <select name="chainring"
              className="form-control c-select"
              value={this.props.gearing.chainring}
              onChange={this.props.onChange}>
              {mapValues(20, 64).map((i) => {
                return <option value={i}>{i}T</option>
              })}
            </select>
          </div>

          <div className="form-group col-sm-4">
            <label>Cog</label>
            <select name="cog"
              value={this.props.gearing.cog}
              className="form-control c-select"
              onChange={this.props.onChange}>
              {mapValues(8, 36).map((i) => {
                return <option value={i}>{i}T</option>
              })}
            </select>
          </div>

          <div className="form-group col-sm-4">
            <label>Crank length</label>
            <select name="crank"
              value={this.props.gearing.crank}
              className="form-control c-select"
              onChange={this.props.onChange}>
              {crankSizes.map((i) => {
                return <option value={i}>{i}mm</option>
              })}
            </select>
          </div>
        </form>
      </div>
    )
  }
}
