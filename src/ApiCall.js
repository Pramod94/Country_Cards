import Axios from 'axios';

export default {
  onSelect : async () => {
    return await new Promise((resolve, reject) => {
      Axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        let res = response.data.map(item => {
          return item;
        })
        resolve(res);
      })
      .catch(error => reject(error))
    })
  }
}
