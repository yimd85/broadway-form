import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

class App extends React.Component {
  state = {
    email: '',
    first_name: '',
    last_name: '',
  };


  evaulateEmail(email) {
    if (email.indexOf(".") === -1 || email.indexOf("@") === -1) {
      this.setState({ email_error: true });
    }
    if (email.indexOf(".") !== -1 && email.indexOf("@") !== -1) {
      this.setState({ email_error: false })
    }
  }

  evaulateName(name, prop) {
    if (name === "") {
      this.setState({ [prop]: true });
    }
    if (name !== "") {
      this.setState({ [prop]: false });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email_error, first_name_error, last_name_error } = this.state;
    return (
      <div style={{ padding: "25px" }}>

        <TextField
          required
          margin="dense"
          id="first_name"
          label="First Name"
          type="text"
          value={this.state.first_name}
          name={'first_name'}
          onChange={e => this.handleChange(e)}
          style={{ width: '25%' }}
          helperText={this.state.first_name_error ? "Please enter a first name" : undefined}
          onBlur={() => this.evaulateName(this.state.first_name, "first_name_error")}
        />
        <br />
        <TextField
          required
          margin="dense"
          id="last_name"
          label="Last Name"
          type="text"
          value={this.state.last_name}
          name={'last_name'}
          onChange={e => this.handleChange(e)}
          style={{ width: '25%' }}
          helperText={this.state.last_name_error ? "Please enter a last name" : undefined}
          onBlur={() => this.evaulateName(this.state.last_name, "last_name_error")}
        />
        <br />
        <TextField
          margin="dense"
          id="Email"
          label="Email Address"
          type="email"
          value={this.state.email}
          name={'email'}
          required
          onChange={e => this.handleChange(e)}
          style={{ width: '25%' }}
          helperText={this.state.email_error ? "Please enter a valid email" : undefined}
          onBlur={() => this.evaulateEmail(this.state.email)}
        />
        <br />
        <div>
          <Button
            variant="contained"
            style={
              email_error !== false || first_name_error !== false || last_name_error !== false
              ?
              { backgroundColor: "gray", color: "black" }
              :
              { backgroundColor: "blue", color: "white" }
        }
      >
        submit
          </Button>
      </div>
      </div >
    );
  }
}

export default App;
