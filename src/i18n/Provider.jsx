import { Fragment } from 'react'
import { intlProvider } from 'react-intl'
import LOCALS from './local'
import messages from './messages'


export default function Provider({children,locale=LOCALS.ENGLISH}) {
   return (
       <intlProvider>
        locale ={locale}
        textComponents={Fragment}
        messages={messages[locale]}
           
           {children}
  </intlProvider>  
        )
  
    }