import { object, string } from "yup";

export const messageValidation = object({
  name: string().required("وارد کردن نام اجباری است"),
  phoneNumber: string().required("وارد کردن شماره تلفن اجباری است"),
  email: string(),
  text: string()
    .required("وارد کردن پیام اجباری است")
    .min(1)
    .max(200, "پیام شما نمیتوانید حاوی 200 کاراکتر بیشتر باشد"),
});
