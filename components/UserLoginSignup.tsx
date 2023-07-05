import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import logoImage from "../public/assets/user-images/image-james.jpg";

import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  name?: string;
  email: string;
  password: string;
};

const UserLoginSignup = () => {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.email ? values : {},
      errors: !values.email
        ? {
            name: {
              type: isLoginPage ? "disabled" : "required",
              message: "Enter your name",
            },
            email: {
              type: "required",
              message: "Enter your email",
            },
            password: {
              type: "required",
              message: "Enter a password",
              // type: 'maxLength',
              // message: 'ds'
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const signedUpUser = trpc.user.signup.useMutation();
  const loginUser = trpc.user.login.useMutation();

  const onSubmit = handleSubmit((data) => {
    if (isLoginPage) {
      loginUser.mutateAsync({
        email: data.email,
        password: data.password,
      });
    } else {
      console.log(signedUpUser);
      signedUpUser.mutateAsync({
        name: data.name!,
        email: data.email,
        password: data.password,
      });
    }

    if (loginUser.isSuccess || signedUpUser.isSuccess) {
      localStorage.setItem(
        "user",
        isLoginPage
          ? JSON.stringify(loginUser.data)
          : JSON.stringify(signedUpUser.data)
      );
    }
  });

  if (loginUser.isLoading || signedUpUser.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[90%] md:w-[500px] mx-auto bg-primaryWhite rounded-xl pt-10 px-10 pb-10">
      {/* <Image 
        src={logoImage}
        alt="logo"
        className="text-center"
      /> */}
      <div className="flex items-stretch gap-4 my-5 border-b-[1px] border-b-accentGray">
        <Link
          href="/login"
          className={`w-full ${
            isLoginPage &&
            `relative before:content-[''] before:w-full before:h-[6px] before:absolute before:bg-purple before:bottom-[-2px]`
          } pb-3`}
        >
          <h2 className="px-20">Login</h2>
        </Link>
        <Link
          href="/signup"
          className={`w-full ${
            !isLoginPage &&
            `relative before:content-[''] before:w-full before:h-[6px] before:absolute before:bg-purple before:bottom-[-2px]`
          } pb-3`}
        >
          <h2 className="px-20">SignUp</h2>
        </Link>
      </div>

      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        {!isLoginPage && (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-primaryGray font-semibold">
              Name
            </label>
            <input
              type="text"
              className="bg-secondaryWhite w-full rounded-md py-3 px-6"
              {...register("name")}
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primaryGray font-semibold">
            Email
          </label>
          <input
            type="email"
            className="bg-secondaryWhite w-full rounded-md py-3 px-6"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-primaryGray font-semibold">
            Password
          </label>
          <input
            type="text"
            className="bg-secondaryWhite w-full rounded-md py-3 px-6"
            {...register("password")}
          />
        </div>

        <button
          type="submit"
          className="bg-purple py-2 rounded-md mt-5 text-primaryWhite font-semibold"
        >
          {isLoginPage ? "Login" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default UserLoginSignup;
