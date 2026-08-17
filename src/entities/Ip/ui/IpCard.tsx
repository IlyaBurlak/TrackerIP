import type {IIpCountry, IIpCountryCity, IIpCountryCityVpn} from "../interface/interface.ts";

type IpData = IIpCountry | IIpCountryCity | IIpCountryCityVpn;

const hasCity = (data: IpData): data is IIpCountryCity =>
    'city' in data.location;

const hasProxy = (data: IpData): data is IIpCountryCityVpn =>
    'proxy' in data;

interface IpCardProps {
    data: IpData;
}

export const IpCard = ({ data }: IpCardProps) => {
    return (
        <div className="ip-card">
            <div className="ip-card__ip">{data.ip}</div>

            <div className="ip-card__row">
                <span>Country</span>
                <span>{data.location.country}</span>
            </div>
            <div className="ip-card__row">
                <span>Region</span>
                <span>{data.location.region}</span>
            </div>
            <div className="ip-card__row">
                <span>Timezone</span>
                <span>{data.location.timezone}</span>
            </div>
            <div className="ip-card__row">
                <span>ISP</span>
                <span>{data.isp}</span>
            </div>

            {hasCity(data) && (
                <>
                    <div className="ip-card__row">
                        <span>City</span>
                        <span>{data.location.city}</span>
                    </div>
                    <div className="ip-card__row">
                        <span>Coordinates</span>
                        <span>{data.location.lat}, {data.location.lng}</span>
                    </div>
                </>
            )}

            {hasProxy(data) && (
                <div className="ip-card__row">
                    <span>VPN / Proxy / Tor</span>
                    <span>
                          {data.proxy.vpn ? 'yes' : 'no'} /{' '}
                        {data.proxy.proxy ? 'yes' : 'no'} /{' '}
                        {data.proxy.tor ? 'yes' : 'no'}
                      </span>
                </div>
            )}
        </div>
    );
};