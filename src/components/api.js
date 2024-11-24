import axios from 'axios';

const API_BASE_URL = 'https://openlibrary.org/search.json';

export const searchBooks = async (query, cancelToken) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { q: query },
      cancelToken,
    });
    // Limit results to the first 2 books
    const limitedResults = {
      ...response.data,
      docs: response.data.docs.slice(0, 20), // Limit to 2 results
    };
    return limitedResults;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      throw new Error('Error fetching books');
    }
  }
};