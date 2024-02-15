import qs from "query-string";
import { RemoveUrlQueryParams, UrlQueryParams } from "@/types/type.d";
import { ThinStar } from "@smastrom/react-rating";

// add query to url
export const formUrlQuery = ({ params, value, key }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

// remove query from url
export const removeUrlQuery = ({ params, key }: RemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  delete currentUrl[key];

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

// convert kb to mb
export const bytesToMegabytes = (bytes: number) => {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2);
};

// rating property
export const customeStyles = {
  itemShapes: ThinStar,
  itemStrokeWidth: 1.3,
  activeFillColor: "#ffb23f",
  activeStrokeColor: "#F4B740",
  inactiveStrokeColor: "#F4B740",
};

export const slug = (title: string) => {
  return title.split(" ").join("-");
};

export const getTimestamp = (createdAt: number): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt;

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / second);
    return `${seconds} ثانیه پیش`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return `${minutes} دقیقه پیش`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `${hours} ساعت پیش`;
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    return `${days} روز پیش`;
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    return `${weeks} هفته پیش`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `${months} ماه پیش`;
  } else {
    const years = Math.floor(timeDifference / year);
    return `${years} سال پیش`;
  }
};
