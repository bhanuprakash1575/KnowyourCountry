import { createContext, useState } from "react";

export const Theme = createContext();

export function Themeprovider({children}){
    const [isDark,setIsdark] = useState(JSON.parse(localStorage.getItem('IsDark')));
    return (
        <Theme.Provider value={[isDark,setIsdark]}>
            {children}
        </Theme.Provider>
    )
}