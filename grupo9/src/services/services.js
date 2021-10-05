import axios from 'axios'

function fetchProduct() {
  const config = {
    url: 'http://localhost:3001/api',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };
  axios
    .request({
      url: 'http://localhost:3001/api',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
    .then(function (response) {
      // handle success
      return response.data.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
export default fetchProduct