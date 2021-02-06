export const setUser = (user) => {
        return (window.localStorage['animalib_authentification'] = JSON.stringify(user));
};

export const getUser = () => {
    return !!window.localStorage['animalib_authentification']
    ? JSON.parse(window.localStorage['animalib_authentification'])
    : {};
};

export const getToken = () => {
    return getUser().token || null;
};

export const isLoggedIn = () => {
    const user = getUser();
    return !!user.token;
};

export const logout = () => {
    localStorage.removeItem('animalib_authentification');
};

export default { setUser, getUser, getToken, isLoggedIn, logout };