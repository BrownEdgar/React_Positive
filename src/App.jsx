import { useState } from "react";
import I18nProvider from "./i18n/Provider";
import Translate from "./i18n/Translate";
import LOCALES from "./i18n/local";


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH)

  const handleChange = (e) => {
    setLocale(e.target.value)
  }
  return (
    <I18nProvider locale={locale}>
          <div>
      <select name="language" id="language" onChange={handleChange}>
        {
          Object.values(LOCALES).map(elem=>{
            return <option key={elem} value={elem}>{elem}</option>
          })
        }
      </select>
      <h1>{Translate("title")}</h1>
    </div>
    </I18nProvider>

  )
}
export default App

