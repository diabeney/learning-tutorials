import React,{ useContext } from 'react';
import { ThemeContext } from './Sidebar';



export default function SidebarContext() {
    const {darkTheme,setDarkTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setDarkTheme(theme => !theme)
    }

    const styles = {
        backgroundColor: darkTheme ? "#333" : 'rgb(138, 53, 248)',
        color: darkTheme? 'darksalmon':'#fff',
    }

  return (
     <div style={styles} className='hero-section'>
        <h1 style={styles.color}>Sidebar</h1>
        <p style={styles.color}>You may think this is suffering, No it is salvation. Smile, for even in death you have become children of Thanos</p>
        <button onClick={toggleTheme}   className='btn'>Dark Theme</button>
    </div>
  )
}
