import * as zod from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const regSchema = zod
  .object({
    name: zod.string({message: "*Обязательно"}).min(3, {message: "Минимум 3 символа"}).max(100),
    surname: zod.string({message: "*Обязательно"}).min(3, {message: "Минимум 3 символа"}).max(100),
    email: zod.string({message: "*Обязательно"}).email({message: "Некорректный e-mail"}),
    password: zod.string({message: "*Обязательно"}).regex(passwordRegex, {message: "Используйте цифры, прописные и строчные буквы, а также символы"}),
    confirmPassword: zod.string({message: "*Обязательно"}).min(8, {message: "Пароли не совпадают"}),
  })
  .refine(
    (data) => (
      data.password === data.confirmPassword,
      { path: ["confirmPassword"], message: "Пароли не совпадают" }
    )
  );

export type regSchemaType = zod.infer<typeof regSchema>;
