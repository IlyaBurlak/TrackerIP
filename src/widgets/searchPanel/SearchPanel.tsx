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

    return (
        <>
            <div className="search-panel">
                <input className='search-panel__input' type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
                <button className='search-panel__button' onClick={handleClick}>Search</button>
            </div>
            <div>
                {data && <IpCard data={data}/>}

            </div>
        </>

    );
};

