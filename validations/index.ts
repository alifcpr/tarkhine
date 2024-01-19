import { Maybe, array, boolean, mixed, object, string } from "yup";

const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nationalCodeRegex = /^([0-9]){10}$/;

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
    .matches(phoneRegex, "شماره تلفن وارد شده اشتباه است"),
});

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
  birthday: mixed(),
  username: string()
    .nullable()
    .test(
      "username-length",
      "نام کاربری شما حداقل باید 5 رقم باشد",
      (value: Maybe<string | null | undefined>) =>
        !value ? true : value.length >= 5
    )
    .notRequired(),
});

export const addressFormValidation = object({
  title: string().required("وارد کردن عنوان اجباری است"),
  own: boolean(),
  phoneNumber: string().when("own", {
    is: true,
    then: (schema) =>
      schema
        .required("وارد کردن شماره همراه اجباری است")
        .matches(phoneRegex, "شماره تلفن اشتباه است"),
    otherwise: (schema) => schema.notRequired().nullable(),
  }),
  getterName: string().when("own", {
    is: false,
    then: (schema) =>
      schema.required("وارد کردن نام و نام خانوادگی گیرنده اجباری است"),
    otherwise: (schema) => schema.notRequired().nullable(),
  }),
  getterPhoneNumber: string().when("own", {
    is: false,
    then: (schema) =>
      schema
        .required("وارد کردن شماره تلفن گیرنده اجباری است")
        .matches(phoneRegex, "شماره تلفن اشتباه است"),
    otherwise: (schema) => schema.notRequired().nullable(),
  }),
  address: string()
    .required("وارد کردن آدرس اجباری است")
    .min(5, "آدرس حداقل باید 5 کاراکتر باشد"),
});

export const getAdviceFormValidation = object({
  name: string()
    .required("وارد کردن نام و نام خانوادگی اجباری است")
    .min(3, "نام و نام خانوادگی شما حداقل باید 3 رقم باشد"),
  phoneNumber: string()
    .required("وارد کردن شماره تماس اجباری است")
    .matches(phoneRegex, "شماره تلفن وارد شده اشتباه است !"),
  date: string().required("مشخص کردن تاریخ اجباری است"),
});

export const representationRequestValidation = object({
  name: string().required("وارد کردن نام و نام خانوادگی اجباری است"),
  nationalCode: string()
    .required("وارد کردن کد ملی اجباری است !")
    .matches(nationalCodeRegex, "کد ملی اشتباه است !"),
  phoneNumber: string()
    .required("وارد کردن شماره تماس اجباری است")
    .matches(phoneRegex, "شماره تلفن اشتباه است !"),
  province: string().required("وارد کردن نام استان اجباری است !"),
  city: string().required("وارد کردن نام شهر اجباری است !"),
  area: string().required("وارد کردن منطقه اجباری است !"),
  address: string().required("وارد کردن آدرس اجباری است !"),
  typeOfOwnership: string().required("وارد کردن نوع مالکیت اجباری است"),
  squareArea: string().required("وارد کردن مساحت (متر مربع) اجباری است"),
  ageOfBuilding: string().required("وارد کردن سن بنا اجباری است !"),
  kitchen: boolean(),
  license: boolean(),
  lodge: boolean(),
  parking: boolean(),
  images: array()
    .required("وارد کردن تصاویر ملک اجباری است")
    .max(4, "حداکثر تعداد عکس 4 عدد است")
    .min(4, "حداقل تعداد عکس 4 عدد است"),
});
