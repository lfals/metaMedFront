export const TOKEN_KEY = "userId";
export const isAuthenticated = () =>  localStorage.getItem(TOKEN_KEY) !== null || sessionStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => {
    if(localStorage.getItem(TOKEN_KEY)){
        return localStorage.getItem(TOKEN_KEY)
    }
    return sessionStorage.getItem(TOKEN_KEY)
};
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const sessionLogin = token => {
    sessionStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    if(localStorage.getItem(TOKEN_KEY)){
        localStorage.removeItem(TOKEN_KEY)
    }
    sessionStorage.removeItem(TOKEN_KEY)
};