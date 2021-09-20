import {Post} from "./Post";

// let post1: Post = {id: 1, userId: 1, title: '123', body: '321'};


interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany;
}

let user: IUser = {
    id: 123,
    name: 'sdasa',
    username: 'dshfsk',
    email: 'ds@lkd.com',
    phone: '+1321354',
    website: 'sd.com.ua',
    company: {
        name: 'jhgjdsg',
        catchPhrase: 'uisryaidhk',
        bs: 'rwerwr'
    },
    address: {
        city: 'qw',
        street: 'sdfsdf',
        suite: 'afaas',
        zipcode: '32135',
        geo: {lat: '133', lng: '32546'}
    }
}