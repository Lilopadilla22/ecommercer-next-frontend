"use client";

import { useAuth } from "./hook";
import { Button } from 'semantic-ui-react'

export default function page() {

  const {user, logout} = useAuth()


  console.log(user)

  return (
    <div>
      <h2 >Game Shop</h2>
      {
        user ? (
          <div>
            <p>Sesion iniciada {user.firstname}</p>
            <Button onClick={logout}>Cerrar sesion</Button>
          </div>
        ) : (
          <div>
            <a href= '/join/sign-in'>
              Iniciar sesion
            </a>
          </div>
        )
      }
    </div>
  );
}