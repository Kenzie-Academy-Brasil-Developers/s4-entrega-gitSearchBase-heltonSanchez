import { getGitHubUser } from "./request.js"

function showUser (user){

    const perfil = document.querySelector('.container__user')

    const avatar = document.createElement('img')
    const name = document.createElement('h2')

    avatar.src = user.avatar_url
    name.innerText = user.name

    perfil.append(avatar, name)
}

async function cardRepository (user) {
      
    const listRepository = document.querySelector('.repositoryList')

    const card = document.createElement('li')
    const project = document.createElement('h3')
    const description = document.createElement('p')
    const linkRepository = document.createElement('a')

    a.innerText = 'Repositório'
    a.href = user.repos_url

    listRepository.appendChild(card)
    card.append(project, description, linkRepository)
}

export function searchUser () {
    const inputSearch = document.querySelector('#searchUser')
    const buttonSearch = document.querySelector('#buttonSearch')

    buttonSearch.addEventListener('click', async () => {
        const searchPerfil = await getGitHubUser(inputSearch.value)
    })
}


showUser()