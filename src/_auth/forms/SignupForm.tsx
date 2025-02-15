import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignupValidation } from "@/lib/validations";
import { z } from "zod";
import { Loader } from "@/components/shared/Loader";
import { createUserAccount } from "@/lib/Appwrite/api";

const SignupForm = () => {
  const { toast } = useToast();
  const isLoading = false;
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return toast({
        title: "Sign Up Failed Please Try Again",
      });

      // const session = await signInAccount()
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-[420] flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h3 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Create a new account
        </h3>
        <p className="text-light-3 small-medium md:text-base font-normal mt-2">
          To use snapgram, please enter your account details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                {" "}
                <Loader />
                Loading...
              </div>
            ) : (
              "Sign up"
            )}
          </Button>
          <p className="text-center text-small-regular text-light-2 mt-2">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
