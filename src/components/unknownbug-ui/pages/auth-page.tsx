"use client";
import { z } from "zod";
import React from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { GithubIcon, LinkedinIcon, LucideProps } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const OAUTH_OPTIONS: {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  platformName: string;
}[] = [
  {
    icon: GithubIcon,
    platformName: "Github",
  },
  {
    icon: LinkedinIcon,
    platformName: "Linkedin",
  },
];

const loginFormSchema = z.object({
  email: z.email().min(1, "Email is Required"),
  password: z.string().min(1, "Password is Required"),
});

const signupFormSchema = z
  .object({
    email: z.email().min(1, "Email is Required"),
    password: z.string().min(1, "Password is Required"),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type LoginFormType = z.infer<typeof loginFormSchema>;
type SignupFormType = z.infer<typeof signupFormSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data);

  return (
    <>
      {OAUTH_OPTIONS?.map(({ icon, platformName }) => {
        const PlatformIcon = icon;
        return (
          <Button key={platformName} className="w-full">
            <PlatformIcon />{" "}
            <span>Continue with {platformName.toLowerCase()}</span>
          </Button>
        );
      })}
      <p className="text-muted-foreground text-center text-sm">or</p>
      <form
        action=""
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="grid grid-cols-4 w-full ">
          <Label className="col-span-1">Email</Label>
          <Input className="col-span-3" {...register("email")} />
          {errors.email && (
            <p className="text-destructive italic text-xs col-span-4  text-right">
              {errors.email.message}
            </p>
          )}
        </span>

        <span className="grid grid-cols-4 w-full ">
          <Label className="col-span-1">Password</Label>
          <Input
            className="col-span-3"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <p className="text-destructive italic text-xs col-span-4  text-right">
              {errors.password.message}
            </p>
          )}
        </span>
        <Button className="w-full">Login</Button>
      </form>
    </>
  );
};
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormType> = (data) => console.log(data);

  return (
    <>
      {OAUTH_OPTIONS?.map(({ icon, platformName }) => {
        const PlatformIcon = icon;
        return (
          <Button key={platformName} className="w-full">
            <PlatformIcon />{" "}
            <span>Continue with {platformName.toLowerCase()}</span>
          </Button>
        );
      })}
      <p className="text-muted-foreground text-center text-sm">or</p>
      <form
        action=""
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="grid grid-cols-4 w-full ">
          <Label className="col-span-1">Email</Label>
          <Input className="col-span-3" {...register("email")} />{" "}
          {errors.email && (
            <p className="text-destructive italic text-xs col-span-4 text-right">
              {errors.email.message}
            </p>
          )}
        </span>

        <span className="grid grid-cols-4 w-full ">
          <Label className="col-span-1">Password</Label>
          <Input
            className="col-span-3"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <p className="text-destructive italic text-xs col-span-4 text-right">
              {errors.password.message}
            </p>
          )}
        </span>
        <span className="grid grid-cols-4 w-full ">
          <Label className="col-span-1">Confirm Password</Label>
          <Input
            className="col-span-3"
            {...register("confirmPassword")}
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-destructive italic text-xs col-span-4  text-right">
              {errors.confirmPassword.message}
            </p>
          )}
        </span>
        <Button className="w-full">Login</Button>
      </form>
    </>
  );
};

/**
 * @description For parent give it  a className of "flex flex-col h-{desired-height}" then it will take full remaining height in parent container
 */
const AuthPage = () => {
  return (
    <div className="w-full flex items-center justify-between h-full relative">
      <div className="flex-3/5 bg-card h-full "></div>
      <div className="flex-2/5 h-full flex items-center justify-center  w-full">
        <Tabs
          defaultValue="login"
          className="overflow-x-hidden p-4 bg-card rounded-2xl"
        >
          <TabsList className="flex w-full max-w-84">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent
            value="login"
            className="flex flex-col gap-2 min-w-84 max-w-84"
          >
            <LoginForm />
          </TabsContent>
          <TabsContent
            value="signup"
            className="flex flex-col gap-2 min-w-84 max-w-84"
          >
            <SignupForm />
          </TabsContent>
        </Tabs>
        <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)]  [background-size:16px_16px]" />
      </div>
    </div>
  );
};

export { LoginForm, SignupForm, AuthPage };
