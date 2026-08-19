import  {useState} from 'react';
import {IpCard} from "../../entities/Ip/ui/IpCard.tsx";
import type {IIpCountryCity} from "../../entities/Ip/interface/interface.ts";
import {apiIp} from "../../entities/Ip/api/api.ts";

import './searchPanel.scss'

export const SearchPanel = () => {
    const [ip , setIp] = useState('')
    const [data, setData] = useState<IIpCountryCity | null>(null)

    const handleClick = async () => {
        try {
            const result = await apiIp.getCountryCity(ip)
            setData(result)
        }catch(err) {
            console.error(err)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleClick()
    }

    return (
        <>
            <div className="search-panel">
                <svg className="search-panel__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm10.5 3-5.4-5.4"
                    />
                </svg>
                <input
                    className='search-panel__input'
                    type="text"
                    placeholder="Введите IP-адрес"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className='search-panel__button' onClick={handleClick}>Search</button>
            </div>
            <div>
                {data && <IpCard data={data}/>}

            </div>
        </>

    );
};
