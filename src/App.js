
import './App.css';
import React,{useState,useEffect} from 'react';
import Topics from './Topics';
import {data} from './data'

function fetchData() {
  return new Promise((resolve) => {
    resolve({
      title: data.title,
      paragraph: data.paragraph
    })
  });
}



function App() {
  const [toggle,setToggle] = useState(true);
  const [paragraph,setParagraph] = useState('Loading...');
  const [title,setTitle] = useState('Loading...');
// The useEffect hook expects a function as an argument and it behaviour depends on the options you pass
  useEffect(() => {
    fetchData().then(
      data => {
        setTitle(data.title);
        setParagraph(data.paragraph)
        console.log('re-rendered!')
      }
    )
  },[])


  function handleClick() {
    toggle ? setToggle(false) : setToggle(true)
    } 

  return (
    <div className='hero-section'>
      <h1>{title}</h1>
      <div className='container'>
        <p>{paragraph}</p>
        <Topics toggle= {toggle} courses={data.courses}/>
        <button onClick={handleClick} className='btn'>Click Me!</button>
      </div>
    </div>
    
  )
}

export default App;
