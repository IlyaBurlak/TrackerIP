export interface IIpAs {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
}

export interface IIp {
    ip: string;
    location:{
        country: string;
        region: string;
        city: string;
        lat: number;
        lng: number;
        postalCode: string;
        timezone: string;
        geonameId: number;
    },
    domains: string[];
    as: IIpAs;
    isp: string;
    proxy: {
        proxy: boolean;
        vpn: boolean;
        tor: boolean;
    }
}

export interface IIpCountry {
    ip: string;
    location: {
        country: string;
        region: string;
        timezone: string;
    };
    domains: string[];
    as: IIpAs;
    isp: string;
}

export interface IIpCountryCity extends Omit<IIpCountry, 'location'> {
    location: IIpCountry['location'] & {
        city: string;
        lat: number;
        lng: number;
        postalCode: string;
        geonameId: number;
    };
}

export interface IIpCountryCityVpn extends IIpCountryCity {
    proxy: {
        proxy: boolean;
        vpn: boolean;
        tor: boolean;
    };
}
