import axios from 'axios'

const API_URL = 'https://api.steamapis.com'

class SteamAPI {
  constructor(apiKey) {
    this.API_KEY = apiKey
  }

  getItem(appId, market_hash_name, median_history_days) {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        url: `${API_URL}/market/item/${appId}/${market_hash_name}`,
        params: { api_key: this.API_KEY },
      }

      axios
        .request(requestOptions)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  getItems(appId) {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        url: `${API_URL}/market/items/${appId}`,
        params: { api_key: this.API_KEY }
      }

      axios
        .request(requestOptions)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}

export default SteamAPI;
