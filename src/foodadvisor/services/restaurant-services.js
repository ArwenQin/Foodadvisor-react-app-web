import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const RESTAURANTS_API = `${API_BASE}/restaurants`;

export const addNewRestaurant = async (restaurantInfo) => {
    const response = await axios.post(RESTAURANTS_API, restaurantInfo);
    return response.data;
};
export const createRestaurant = async (res) => {
    const response = await axios.post(RESTAURANTS_API, res)
    return response.data;
}
export const findRestaurants = async () => {
    const response = await axios.get(RESTAURANTS_API);
    const res = response.data;
    return res;
}

export const findResByName = async (name) => {
    const response = await axios.get(`${RESTAURANTS_API}/${name}`);
    const res = response.data;
    return res;
}

export const deleteRestaurant = async (rid) => {
    const response = await axios.delete(`${RESTAURANTS_API}/${rid}`)
    return response.data
}


export const updateRestaurant = async (res) => {
    const response = await axios
        .put(`${RESTAURANTS_API}/${res._id}`, res);
    return res;
}
export const searchRestaurants = async (query) => {
    const response = await axios.get(`${RESTAURANTS_API}/search`, { params: { q: query } });
    return response.data;
}
