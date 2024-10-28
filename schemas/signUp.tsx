import * as zod from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const regSchema = zod.object({
    name: zod.string().min(3).max(100),
    surname: zod.string().min(3).max(100),
    email: zod.string().email(),
    password: zod.string().regex(passwordRegex),
  });
  
export type regSchemaType = zod.infer<typeof regSchema>;