import { getGitHubUser } from "./request.js"

function showUser (user){
    const 
}

export function searchUser () {
    const inputSearch = document.querySelector('#searchUser')
    const buttonSearch = document.querySelector('#buttonSearch')

    buttonSearch.addEventListener('click', async () => {
        const searchPerfil = await getGitHubUser(inputSearch.value)
    })
}


showUser()