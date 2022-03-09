const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {     
  try {       
    const result = await fetch(url);       
    return result.json();     
  } catch (e) {       
    console.warn(e);     
  }   
}   

const api = {
  fetchCats: async (keyword) => {
    const response = await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
    return response;
  },
  fetchCat: async (id) => {
    const response = await request(`${API_ENDPOINT}/api/cats/${id}`)
    return response;
  },
};
