// class Client<T> {
interface Client<T> {
    id: T;
    login: string
}

let client1: Client<number> = {id: 12, login: 'kjhkh'}
let client2: Client<string> = {id: '12', login: 'kjhkh'}