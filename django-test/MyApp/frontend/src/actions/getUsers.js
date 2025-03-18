export function getUsers(user){
    return {
        type: 'GET',
        payload: user,
    };
}