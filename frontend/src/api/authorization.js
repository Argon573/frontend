const link = 'http://localhost:8000/users/authorization';

export async function authorization(user){

    const result = await fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            login: user.login,
            password: user.password
        })
    })


    if (result.ok) {
        return result.json();
    }
}