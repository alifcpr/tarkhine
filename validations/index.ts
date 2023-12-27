import { Maybe, mixed, object, string } from "yup";

export const messageValidation = object({
  name: string().required("وارد کردن نام اجباری است"),
  phoneNumber: string().required("وارد کردن شماره تلفن اجباری است"),
  email: string(),
  text: string()
    .required("وارد کردن پیام اجباری است")
    .min(1)
    .max(200, "پیام شما نمیتوانید حاوی 200 کاراکتر بیشتر باشد"),
});

export const loginValidation = object({
  phoneNumber: string()
    .required("وارد کردن شماره همراه اجباری است")
    .matches(
      /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
      "شماره تلفن وارد شده اشتباه است"
    ),
});

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const profileInfoValidation = object({
  name: string()
    .nullable()
    .test(
      "name-length",
      "نام شما حداقل باید 3 کاراکتر باشد",
      (value: Maybe<string | null | undefined>) =>
        !value ? true : value.length >= 3
    )
    .notRequired(),
  family: string()
    .nullable()

    .test(
      "family-length",
      "نام خانوادگی شما حداقل باید 3 رقم باشد",
      (value: Maybe<string | null | undefined>) =>
        !value ? true : value.length >= 3
    )
    .notRequired(),
  email: string()
    .nullable()
    .test(
      "email-format",
      "فرمت ایمیل صحیح نیست",
      (value: Maybe<string | null | undefined>) =>
        !value ? true : emailRegex.test(value)
    )
    .notRequired(),
  phone: string(),
  brithday: mixed(),
  userName: string()
    .nullable()
    .test(
      "userName-length",
      "نام کاربری شما حداقل باید 5 رقم باشد",
      (value: Maybe<string | null | undefined>) =>
        !value ? true : value.length >= 5
    )
    .notRequired(),
});
