import { useState } from 'react'
import './App.css'
import I18nProvider from './i18n/Provider'
import Translate from './i18n/Translate'
import LOCALES from './i18n/local'



function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  const handleChange = (e) => {
    setLocale(e.target.value)
  }

  return (
    <I18nProvider locale={locale}>
      <div className='App'>
        <select name="language" id="language" onChange={handleChange}>
          {
            Object.values(LOCALES).map(elem => {
              return <option value={elem} key={elem}>{elem}</option>
            })
          }
        </select>

        <h1>
          <Translate id="title" value={{ secret: 'v6.5.5' }} />
        </h1>
        <p>
          <Translate id="description" />
        </p>
      </div>
    </I18nProvider>

  )
}

export default App
