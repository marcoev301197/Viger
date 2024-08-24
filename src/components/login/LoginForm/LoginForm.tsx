"use client"
import { handleLogin } from "app/actions";
import styles from "./LoginForm.module.sass";
import Link from 'next/link'

export const LoginForm = () => {

  const handleSubmit = async (event: {
    target: any;
    preventDefault: () => void;
  
  }) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await handleLogin(formData);
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
        <input type="text" name="email" placeholder="Correo Electrónico" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="submit" name="submit" value="Iniciar Sesión" />
      </form>
      <br/>
      <Link href="/signup" className={styles.NewAccountForm__form__button}>Registrarme</Link>
    </div>
  );
}