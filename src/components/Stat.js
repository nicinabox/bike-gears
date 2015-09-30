import React from 'react';

export default class State extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="stat" style={styles.stat}>
        <span clasName="value" style={styles.value}>
          {this.props.value}{this.props.unit}
        </span>
        <span>{this.props.label}</span>
      </div>
    )
  }
}

var styles = {
  stat: {
    textAlign: 'center'
  },

  value: {
    fontSize: 30,
    display: 'block',
    fontWeight: 'bold'
  }
}
