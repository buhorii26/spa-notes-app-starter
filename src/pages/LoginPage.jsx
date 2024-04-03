import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { login } from "../utils/network-data";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <LoginForm login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};

export default LoginPage;
