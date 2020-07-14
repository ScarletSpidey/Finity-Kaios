import React, { Component } from 'react';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state({
      mobilenumber: '',
    });
  }
  render() {
    return (
      <form>
        <div>
          <label>Mobile Number</label>
          <input
            type='Text'
            value={this.state.mobilenumber}
            onChange={(events, newval) =>
              this.setState({
                mobilenumber: newval,
              })
            }
          />
        </div>
      </form>
    );
  }
}

export default Register;
