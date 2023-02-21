export async function getGitHubUser (userName) {

    const getUser = await fetch (`https://api.github.com/users?name=${userName}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => {
        if(response.message == "Not Found"){
            window.location.replace('/src/pages/profile.html')
        }else{
            window.location.replace('/src/pages/error.html')
        }
        return response.json()
    })

    return getUser
}