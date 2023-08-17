import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const EXPLORE_API = `${API_BASE}/explores`;

export const createExplore = async (res) => { const response = await axios.post(EXPLORE_API, res)
  return response.data;
}
export const findExplore = async () => {
  const response = await axios.get(EXPLORE_API);
  const explores = response.data;
  return explores;
}


export const deleteExplore = async (rid) => {
  const response = await axios.delete(`${EXPLORE_API}/${rid}`)
  return response.data
}


export const updateExplore = async (res) => {
  const response = await axios
  .put(`${EXPLORE_API}/${res._id}`, res);
  return res;
}



