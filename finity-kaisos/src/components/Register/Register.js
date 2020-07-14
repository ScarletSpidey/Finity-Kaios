import React, { Component } from 'react';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobilenumber: '',
    };
  }
  render() {
    return (
      <div className='container pt-5'>
        <div className='container'>
          <form>
            <div>
              <label>
                <small>Mobile Number</small>
              </label>
              <input
                type='Text'
                className='form-control'
                value={this.state.mobilenumber}
                onChange={(events, newval) =>
                  this.setState({
                    mobilenumber: newval,
                  })
                }
              />
              <br />
              <button type='submit' className='btn btn-primary btn-sm'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
