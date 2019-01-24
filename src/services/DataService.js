const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export {fetchData};
