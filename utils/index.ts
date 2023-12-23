import qs from "query-string";
import { RemoveUrlQueryParams, UrlQueryParams } from "@/types/type.d";

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
