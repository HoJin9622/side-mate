let url = "http://localhost";
url = "http://www.side-mate.com";
if (process.env.NODE_ENV === "production") {
  url = "http://www.side-mate.com";
}

export const BASE_URL = url + ":8000/api/v1/";
