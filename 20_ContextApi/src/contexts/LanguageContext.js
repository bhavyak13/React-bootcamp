import React, { createContext, useState } from 'react'

const LanguageContext = createContext();
function LanguageProvider(props) {
    const [language, setLanguage] = useState('english');
    return (
        <LanguageContext.Provider value={{ language,setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}
export { LanguageContext, LanguageProvider };