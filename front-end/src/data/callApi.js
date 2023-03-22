const API_URL = "http://localhost:3000/user/";
const userId = 18;

/**
* function to return data
* @param {string} endpoint path to api 
* @returns {array} return array data
*/
const getData = async (endpoint) => {
  return await fetch(`${API_URL}${userId}${endpoint}`)
    .then((response) => response.json())
    .catch((err) => {
      alert('Une erreur est survenue sur le serveur')
      console.log(err)
    });
};

/**
* function to return data
* @returns {array} return array data
*/
export const getDataUser = async () => {
  return [
    {
      user: await getData(""),
    },
    {
      activity: await getData("/activity"),
    },
    {
      average: await getData("/average-sessions"),
    },
    {
      performance: await getData("/performance"),
    },
  ];
};
