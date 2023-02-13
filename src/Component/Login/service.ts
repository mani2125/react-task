import { loginSuccessRes, loginErrorRes } from "../../MockResponse";

export const requestLogin = async (req: any)=>{
    return await fetch('/login', { method: 'POST', body: req })
    .then( res => res.json() )
    .then(result => {
        return result;
    })
    .catch((error) => {
        console.log(error)
        if (req.email === "alexey@klaim.ai" && req.password === "lkJlkn8hj"){
            return loginSuccessRes;
        }else{
            return loginErrorRes;
        }
        // Return mock data
    } )
}
