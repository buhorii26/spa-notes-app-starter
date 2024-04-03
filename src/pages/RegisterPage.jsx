import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <RegisterForm register={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
