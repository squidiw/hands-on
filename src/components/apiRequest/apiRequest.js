import axios from "axios";

const API_URL = "http://localhost:3500/items";

export const fetchItems = async () => {
   await axios.get(API_URL);
};
