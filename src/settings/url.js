let url = "http://localhost:8000/api/v1/";

if (process.env.NODE_ENV === "production") {
  url = "http://52.78.44.143:8000/api/v1/";
}

export const BASE_URL = url;
