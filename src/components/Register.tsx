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
import { regSchema, regSchemaType } from "D:/const/constsm/schemas/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImVk } from "react-icons/im";
import { Link } from "react-router-dom";

function Register() {
  const form = useForm<regSchemaType>({
    resolver: zodResolver(regSchema),
  });

  function onSubmit(values: regSchemaType) {
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-left">Имя:</FormLabel>
              <FormControl>
                <Input placeholder="Иван" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия:</FormLabel>
              <FormControl>
                <Input placeholder="Иванов" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Введите E-mail:</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormDescription className="">
                Будет использоваться для входа
              </FormDescription>
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Повторите пароль:</FormLabel>
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
        Продолжить
      </Button>
      <div className="mt-2 flex justify-center items-center">
        <p className="text-sm">Есть аккаунт?</p>
        <Button variant={"link"} className="w-12">
          <Link to="/">Вход</Link>
        </Button>
      </div>
    </div>
  );
}

export default Register;
