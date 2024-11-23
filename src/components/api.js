import axios from 'axios';

const API_BASE_URL = 'https://openlibrary.org/search.json';

export const searchBooks = async (query, cancelToken) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { q: query },
      limit : 20,
      cancelToken, // Add the cancel token here
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      throw new Error('Error fetching books');
    }
  }
  
};
