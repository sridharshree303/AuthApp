import { UserAgentApplication } from "msal";

export const LOGIN_SCOPES = ["openid","profile","user.read"];
export const API_SCOPES = [""];

export const acquireToken = () =>{
    var userRequest = {
        scopes : API_SCOPES
    }

    try{
        return msalApp.acquireTokenSilent(userRequest);
    }catch(error){
        console.log("Error = ",error);
    }
}

export const fetchAPI = (url,accessToken) =>{
    const response = fetch(url,{
        responseType:"text",
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    });
    return response;
}

export const msalApp = new UserAgentApplication({
    auth:{
        clientId:"",
        authority:"https://login.microsoftonline.com/tenant-id",
        validateAuthority:true,
        postLogoutRedirectUri:"http://localhost:3000",
        navigateToLoginRequestUrl:true
    },
    cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie:false
    }
})