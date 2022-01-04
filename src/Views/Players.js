import { client, checkError } from '../services/client';

export async function fetchPlayers() {
  const resp = await client.from('players').select.order('name');
  return checkError(resp);
}

export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*, teams(*)').match({ id });
  return checkError(resp);
}

//This will have a useEffect that will call our getPlayers from the services folder

//set the players into state

//then for every player we are going to map through each name and for each player we will return a link
