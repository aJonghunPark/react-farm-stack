import axios from "axios";

import { CsrfToken } from "../../types";

const apiUrl = process.env.REACT_APP_API_URL;

export const getCsrfToken = async () => {
  const res = await axios.get<CsrfToken>(`${apiUrl}/csrftoken`);
  axios.defaults.headers.common["X-CSRF-Token"] = res.data.csrf_token;
};
