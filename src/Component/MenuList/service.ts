import { LogoutData } from "../../MockResponse";

export const logOut = async (token: string)=>{
    const url = `/logout?token=${token}`
    return await fetch(url, { method: 'DELETE' })
    .then( res => res.json() )
    .then(result => {
        return result;
    })
    .catch((error) => {
        console.log(error)
        return LogoutData;    // Return mock data
    } )
}