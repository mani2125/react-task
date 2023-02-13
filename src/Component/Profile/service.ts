import { ProfileData, AuthorData, QuotesData } from "../../MockResponse";

export const getProfile = async (token: string)=>{
    const url = `/profile?token=${token}`
    return await fetch(url)
    .then( res => res.json() )
    .then(result => {
        return result;
    })
    .catch((error) => {
        console.log(error)
        return ProfileData;
        // Return mock data
    } )
}

export const requestAuthor = async (token: string)=>{
    const url = `/author?token=${token}`
    return await fetch(url)
    .then( res => res.json() )
    .then(result => {
        return result;
    })
    .catch((error) => {
        console.log(error)
        return AuthorData;
        // Return mock data
    } )
}

export const requestQuotes = async (token: string, authorId: string)=>{
    const url = `/quote?token=${token}&authorId=${authorId}`
    return await fetch(url)
    .then( res => res.json() )
    .then(result => {
        return result;
    })
    .catch((error) => {
        console.log(error)
        return QuotesData;
        // Return mock data
    } )
}


