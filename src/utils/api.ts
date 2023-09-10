import axios from 'axios';

const baseURL = 'https://api.punkapi.com/v2';

export const fetchBeers = async (page: number, perPage: number): Promise<any> => {
  try {
    const response = await axios.get(`${baseURL}/beers?page=${page}&per_page=${perPage}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
