import axios from 'axios';
import type { IIpCountry, IIpCountryCity, IIpCountryCityVpn } from '../interface/interface';

const ipifyClient = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2',
    timeout: 5000,
    params: {
        apiKey: import.meta.env.VITE_IPIFY_API_KEY,
    },
});

export const apiIp = {

    getCountry: (ip: string) =>
        ipifyClient
            .get<IIpCountry>('/country', { params: { ipAddress: ip } })
            .then((res) => res.data),

    getCountryCity: (ip: string) =>
        ipifyClient
            .get<IIpCountryCity>('/country,city', { params: { ipAddress: ip } })
            .then((res) => res.data),

    getCountryCityVpn: (ip: string) =>
        ipifyClient
            .get<IIpCountryCityVpn>('/country,city,vpn', { params: { ipAddress: ip } })
            .then((res) => res.data),

}