// import {patchRequest, postRequest, getRequest} from "@/services/axios.service"
import {patchRequest, getRequest} from "@/services/axios.service"

async function getAllOrgsFromAPI() {
    return getRequest('/orgs/get', 'GETALLORGS');
}
  
// async function createOrgInAPI(orgData) {
//     return postRequest('/orgs/create', orgData, 'CREATEORG');
// }
  
async function addTeamToOrgInAPI(data, orgSecret) {
    const headers = orgSecret ? { 'org-secret': orgSecret } : {};
    const url = orgSecret ? `/orgs/addteam?org-secret=${orgSecret}` : '/orgs/addteam';
    return patchRequest(url, data, 'ADDTEAMTOORG', headers);
}
  
// async function removeTeamFromOrgInAPI(data, orgSecret) {
//     const headers = orgSecret ? { 'org-secret': orgSecret } : {};
//     return patchRequest('/orgs/removeteam', data, 'REMOVETEAMFROMORG', headers);
// }
  
async function getOrgByIdFromAPI(id, orgSecret) {
    const headers = orgSecret ? { 'org-secret': orgSecret } : {};
    const url = orgSecret ? `/orgs/getbyid/${id}?org-secret=${orgSecret}` : `/orgs/getbyid/${id}`;
    return getRequest(url, 'GETORGANIZATIONBYID', headers);
}
  
  


async function getAllOrgs() {
    let answer = await getAllOrgsFromAPI();
    // console.log(answer);
    return answer;
}
  
// async function createOrg(orgData) {
//     let answer = await createOrgInAPI(orgData);
//     return answer;
// }
  
// async function addTeamToOrg(data, orgSecret) {
//     let answer = await addTeamToOrgInAPI(data, orgSecret);
//     return answer;
// }
  
// async function removeTeamFromOrg(data, orgSecret) {
//     let answer = await removeTeamFromOrgInAPI(data, orgSecret);
//     return answer;
// }
  
async function getOrgById(id, orgSecret) {
    let answer = await getOrgByIdFromAPI(id, orgSecret);
    return answer;
}

export {
    addTeamToOrgInAPI,
    getOrgById,
    getAllOrgs
};


// Exemple d'utilisation de createOrg, addTeamToOrg, removeTeamFromOrg et getOrgById :
// const newOrgData = { name: 'Justice League', secret: 'organizationSecret' };
// const createdOrg = await createOrg(newOrgData);
// console.log('Created Organization:', createdOrg);

// const addTeamData = { idTeam: 'team123' };
// const updatedOrgWithAddedTeam = await addTeamToOrg(addTeamData, 'organizationSecret');
// console.log('Updated Organization with Added Team:', updatedOrgWithAddedTeam);

// const removeTeamData = { idTeam: 'team123' };
// const updatedOrgWithRemovedTeam = await removeTeamFromOrg(removeTeamData, 'organizationSecret');
// console.log('Updated Organization with Removed Team:', updatedOrgWithRemovedTeam);

// const orgById = await getOrgById('123456789abcd', 'organizationSecret');
// console.log('Organization by ID:', orgById);