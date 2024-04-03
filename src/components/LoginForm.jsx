import React from "react";
import PropTypes from "prop-types";
// import useInput from "../hooks/useInput";

// function LoginForm({ onLogin }) {
//   const [email, onEmailChange] = useInput("");
//   const [password, onPasswordChange] = useInput("");

//   return (
//     <div className="input-login">
//       <label htmlFor="email">Email</label>
//       <input type="email" id="email" value={email} onChange={onEmailChange} />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={onPasswordChange}
//       />
//       <button>Login</button>
//     </div>
//   );
// }
// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };

//     this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
//     this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//   }

//   onEmailChangeHandler(event) {
//     this.setState(() => {
//       return {
//         email: event.target.value,
//       };
//     });
//   }

//   onPasswordChangeHandler(event) {
//     this.setState(() => {
//       return {
//         password: event.target.value,
//       };
//     });
//   }

//   onSubmitHandler(event) {
//     event.preventDefault();

//     this.props.login({
//       email: this.state.email,
//       password: this.state.password,
//     });
//   }
//   render() {
//     <form onSubmit={this.onSubmitHandler} className="login-input">
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={this.state.email}
//         onChange={this.onEmailChangeHandler}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         value={this.state.password}
//         onChange={this.onPasswordChangeHandler}
//       />
//       <button>Login</button>
//     </form>;
//   }
// }
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="input-register">
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
        <button>Login</button>
      </form>
    );
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
