import React from "react";
import { CardWrapper } from "./card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Bem vindo de volta"
      backButtonLabel="Não tem uma conta?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
}
