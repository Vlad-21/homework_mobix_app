import {ILogin} from "../interfaces/login.interface";

export function setUser(userData: ILogin): void {
    localStorage.setItem('userData', JSON.stringify(userData));
}

export function isAuth(): boolean {
    return !!localStorage.getItem('userData');
}

export function logout(): void {
    localStorage.clear();
}