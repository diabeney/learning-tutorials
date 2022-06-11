import React,{useState} from 'react'
import SidebarContext from './sidebar-context';

export const ThemeContext = React.createContext()

function Sidebar() {
    const [darkTheme,setDarkTheme] = useState(false);

   
  return (

      <>
        <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
            <SidebarContext/>
        </ThemeContext.Provider>
      </>
  )
}

export default Sidebar