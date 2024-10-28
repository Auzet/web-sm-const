import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod.string({required_error: "Обязательно"}).email({ message: "Некорректный E-mail адрес" }),
  password: zod.string({required_error: "Обязательно"}),
});

export type loginSchemaType = zod.infer<typeof loginSchema>;
