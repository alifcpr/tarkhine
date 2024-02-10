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
