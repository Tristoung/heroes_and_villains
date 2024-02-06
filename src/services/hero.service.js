import {getRequest, putRequest, postRequest} from "@/services/axios.service"

async function getAllHeroesFromAPI() {
    return getRequest('/heroes/getaliases', 'GETALLHEROES')
}

async function getHeroByIdFromAPI(id) {
    return getRequest('/heroes/getbyid/'+id, 'GETHEROBYID')
}

async function createHeroInAPI(heroData) {
    return postRequest('/heroes/create', heroData, 'CREATEHERO');
}
  
async function updateHeroInAPI(heroData, orgSecret) {
    const headers = orgSecret ? { 'org-secret': orgSecret } : {};
    return putRequest('/heroes/update', heroData, 'UPDATEHERO', headers);
}



async function getAllHeroes() {
    let answer = await getAllHeroesFromAPI()
    return answer
}

async function getHeroById(id) {
    let answer = await getHeroByIdFromAPI(id)
    return answer
}

async function createHero(heroData) {
    let answer = await createHeroInAPI(heroData);
    return answer;
}
  
async function updateHero(heroData, orgSecret) {
    let answer = await updateHeroInAPI(heroData, orgSecret);
    return answer;
}


// Exemple d'utilisation de createHero et updateHero :
// const newHeroData = { publicName: 'Superman', realName: 'Clark Kent', powers: [...] };
// const createdHero = await createHero(newHeroData);
// console.log('Created Hero:', createdHero);

// const updatedHeroData = { _id: '123456', publicName: 'Batman', realName: 'Bruce Wayne', powers: [...] };
// const updatedHero = await updateHero(updatedHeroData, 'organizationSecret');
// console.log('Updated Hero:', updatedHero);
