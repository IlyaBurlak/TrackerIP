import { observer } from 'mobx-react-lite'
import { SearchPanel } from '../../widgets/searchPanel/SearchPanel.tsx'

import './homePage.scss'

export const HomePage = observer(() => {
    return (
        <div className="home-page">
            <div className="home-page__logo">
                <span className="home-page__logo-accent">IP</span>Search
            </div>
            <SearchPanel />
        </div>
    )
})
