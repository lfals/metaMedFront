import axios from 'axios'

const apiurl = "http://localhost:3000"

export const addToDatabase = (route, data) => {

  axios.post(`${apiurl}/${route}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


export const getFromDatabase = (route) => {

  return axios.get(`${apiurl}/${route}`)
    .then(function (response) {
      return response
    })


}