import axios from 'axios'

function fetchProduct() {
  axios('http://localhost:3001/api',{
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
  }).then(response => console.log(response))

}
export default fetchProduct