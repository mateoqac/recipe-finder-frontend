// const BASE_URL = "http://127.0.0.1:3000/api/v1";
const REACT_APP_BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

export const RECIPES_URL = `${REACT_APP_BACKEND_BASE_URL}/recipes`;
export const FIND_URL = `${RECIPES_URL}/find`;
