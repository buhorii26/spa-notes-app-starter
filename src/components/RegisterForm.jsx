import React from "react";
//import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

// function RegisterForm() {
//   const [name, onNameChange] = useInput("");
//   const [email, onEmailChange] = useInput("");
//   const [password, onPasswordChange] = useInput("");

//   return (
//     <div className="input-register">
//       <form>
//         <label htmlFor="name">Name</label>
//         <input type="name" id="name" value={name} onChange={onNameChange} />
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" value={email} onChange={onEmailChange} />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={onPasswordChange}
//         />
//         <button className="input-register">Register</button>
//       </form>
//     </div>
//   );
// }
// RegisterForm.propTypes = {
//   register: PropTypes.func.isRequired,
// };

// export default RegisterForm;

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="input-register">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
        <button>Register</button>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
