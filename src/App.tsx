import { observer } from 'mobx-react-lite'
import './App.scss'

import {SearchPanel} from "./widgets/searchPanel/SearchPanel.tsx";

export const App = observer(() => {

  return (
      <div className="App">
          <SearchPanel/>
      </div>
  )

})

