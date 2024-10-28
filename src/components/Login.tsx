import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { loginSchema, loginSchemaType } from "D:/const/constsm/schemas/signIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImVk } from "react-icons/im";
import { Link } from "react-router-dom";

function Login() {
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(values: loginSchemaType) {
    try {
      console.log(values);
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <div className="flex flex-col p-4 w-4/12 justify-center items-stretch border-2 border-accent rounded-xl">
      <ImVk className="min-h-14 min-w-14 mx-auto mb-4" />
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-left">Введите E-mail:</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Введите пароль:</FormLabel>
              <FormControl>
                <Input placeholder="*" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <Button
        className="mt-4 w-36 mx-auto"
        onClick={form.handleSubmit(onSubmit)}
      >
        Войти
      </Button>
      <p className="mx-auto text-muted-foreground mt-4 text-sm">Нет аккаунта?</p>
      <Button
        variant={"link"}
        className="w-36 mx-auto"
      >
        <Link to='/sign-up'>Зарегистрироваться</Link>
      </Button>
    </div>
  );
}

export default Login;
