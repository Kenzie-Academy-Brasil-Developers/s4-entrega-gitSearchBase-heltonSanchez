
const userGitHub = JSON.parse(localStorage.getItem("@gitSeach:UserName"))

async function showGitHubUser () {


    const profile = document.querySelector('.container__user')

    const imgUser = document.createElement('img')
    const nameUser = document.createElement('h2')

    imgUser.src = userGitHub.avatar_url
    nameUser.innerText = userGitHub.name

    profile.append(imgUser, nameUser)

}

async function requestRepository(element){

    const getRepository = await fetch(`https://api.github.com/users/${element}/repos`)
    const repository = await getRepository.json()

    repository.forEach(element => {
        console.log(element.html_url)
        const profileRepository = document.querySelector('.repositoryList')
    
        const boxRepository = document.createElement('li')
        const name = document.createElement('h3')
        const description = document.createElement('p')
        const link = document.createElement('a')
    
        name.innerText = element.name
    
        description.innerText = element.description
    
        link.href = element.html_url
        link.innerText = "Repositório"
    
        profileRepository.appendChild(boxRepository)
        boxRepository.append(name, description, link)
    });


}


showGitHubUser()
requestRepository(userGitHub.login)