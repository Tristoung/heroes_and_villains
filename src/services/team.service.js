import {getRequest, patchRequest, postRequest} from "@/services/axios.service"

async function getAllTeamsFromAPI() {
    return getRequest('/teams/get', 'GETALLTEAMS');
}
  
async function createTeamInAPI(teamData) {
    return postRequest('/teams/create', teamData, 'CREATETEAM');
}
  
async function addHeroesToTeamInAPI(data) {
    return patchRequest('/teams/addheroes', data, 'ADDHEROESTOTEAM');
}
  
async function removeHeroesFromTeamInAPI(data) {
    return patchRequest('/teams/removeheroes', data, 'REMOVEHEROESFROMTEAM');
}
  
  
async function getAllTeams() {
    let answer = await getAllTeamsFromAPI();
    return answer;
}
  
async function createTeam(teamData) {
    let answer = await createTeamInAPI(teamData);
    return answer;
}
  
async function addHeroesToTeam(data) {
    let answer = await addHeroesToTeamInAPI(data);
    return answer;
}
  
async function removeHeroesFromTeam(data) {
    let answer = await removeHeroesFromTeamInAPI(data);
    return answer;
}

// Exemple d'utilisation de createTeam, addHeroesToTeam et removeHeroesFromTeam :
// const newTeamData = { name: 'Justice League' };
// const createdTeam = await createTeam(newTeamData);
// console.log('Created Team:', createdTeam);

// const addHeroesData = { idHeroes: ['hero1', 'hero2'], idTeam: 'team123' };
// const updatedTeamWithAddedHeroes = await addHeroesToTeam(addHeroesData);
// console.log('Updated Team with Added Heroes:', updatedTeamWithAddedHeroes);

// const removeHeroesData = { idHeroes: ['hero1'], idTeam: 'team123' };
// const updatedTeamWithRemovedHeroes = await removeHeroesFromTeam(removeHeroesData);
// console.log('Updated Team with Removed Heroes:', updatedTeamWithRemovedHeroes);
