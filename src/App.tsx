import { observer } from 'mobx-react-lite'
import './App.scss'

import {HomePage} from "./pages/home/HomePage.tsx";

export const App = observer(() => {

  return (
      <div className="App">
          <HomePage/>
      </div>
  )

})

