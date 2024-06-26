import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email ínvalido",
  }),
  password: z.string().min(1, {
    message: "A senha é obrigatória",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email ínvalido",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter no minimo 6 caracteres",
  }),
  name: z.string().min(1, {
    message: "Nome é obrigatório",
  }),
});
