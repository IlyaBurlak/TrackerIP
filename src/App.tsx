import { observer } from 'mobx-react-lite'
import './App.scss'
import {useState} from "react";
import type {IIpCountryCity} from "./entities/Ip/interface/interface.ts";
import {apiIp} from "./entities/Ip/api/api.ts";
import {IpCard} from "./entities/Ip/ui/IpCard.tsx";

export const App = observer(() => {

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
          <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
          <button onClick={handleClick}>Получить информацию</button>
          {data && <IpCard data={data}/>}
      </>
  )

})

