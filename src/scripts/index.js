
function searchUser() {
    const inputSearch = document.querySelector('#searchUser')
    const buttonSearch = document.querySelector('#buttonSearch')

    buttonSearch.addEventListener('click', async () => {
        const getUser = await fetch(`https://api.github.com/users/${inputSearch.value}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        const resp = await getUser.json()

        if (resp.message == "Not Found") {
            window.location.replace('./src/pages/error.html')
        } else {
            localStorage.setItem("@gitSeach:UserName", JSON.stringify(resp))
            window.location.replace('./src/pages/profile.html')
        }
        return getUser
    })
}

searchUser()