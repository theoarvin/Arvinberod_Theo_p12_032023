const API_URL = "http://localhost:3000/user/";
const userId = 18;

const getData = async (endpoint) => {
  return await fetch(`${API_URL}${userId}${endpoint}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

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
