let url = "http://localhost";
// url = "http://52.78.44.143";
// url = 'http://www.side-mate.com';

if (process.env.NODE_ENV === 'production') {
    url = "http://52.78.44.143";
  // url = 'http://www.side-mate.com';
}

export const BASE_URL = url+':8000/api/v1/';