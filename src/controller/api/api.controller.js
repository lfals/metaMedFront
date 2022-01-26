import axios from 'axios'

const apiurl = "https://meta-med-lfals.vercel.app"

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

export const postToDatabase = (route, data) => {

  return axios.post(`${apiurl}/${route}`, data)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getUsers = (token, id) => {
  console.log(token, id);
  const config = {
    headers: { Authorization: `${token}` }
}
  const body = id
    axios.get(`${apiurl}/users`, { userId: id},  { headers: {"Authorization" : `Bearer ${token}`} }).then(response => {
      console.log(response);
    }).catch(console.log)


}
