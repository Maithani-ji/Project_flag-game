

import nations from './nations';
import 'flag-icon-css/css/flag-icons.css'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[country,setCountry]=useState([]);
  const[flagcountry,setFlagcountry]=useState({})
  const [score,setScore]=useState({total:0,correct:0,incorrect:0})
  const [showans,setShowans]=useState(false);
  const [select,setSelect]=useState({});
 
  const generate=()=>{
    let ct=[];
    for(let i=0;i<4;i++)
    {
      const r=Math.floor(Math.random()*nations.length);
      ct.push(nations[r]);
    }
    
    setCountry(ct);
    const index=(Math.floor(Math.random()*4))
    setFlagcountry(ct[index]);
    console.log(ct,ct[index]);
  }
  const check=(country)=>{
    setSelect(country);
    if(country.name===flagcountry.name){
      // alert('correct');
      setScore({...score,correct:score.correct+1,total:score.total+1});
    }
    else{
      // alert('incorrect')
      setScore({...score,incorrect:score.incorrect+1,total:score.total+1})
    }
   setShowans(true);
    setTimeout(()=>{
     setShowans(false);
      next();
    },900)
    
  }

  const next=()=>{
    generate();
  }

  useEffect(()=>{
    generate();
  },[])



  // console.log(nations);
  return (
    <div className="App">
      <div>
        <h3>Total :{score.total}  /  Correct : {score.correct} /  Incorrect : {score.incorrect}</h3>
      </div>
      {
        flagcountry.name ? (<span className={`flag-icon flag-icon-${flagcountry['alpha-2'].toLowerCase()}`}></span>): null
        }
      
   

    <div>
      {
        country.map(c=><button onClick={e=>check(c)}>{c.name}</button>)
      }
      
      
    </div>
   { showans?  <h2 className={flagcountry.name===select.name ? 'correct':'incorrect'}>Correct Answere  : {flagcountry.name}</h2>: null}
    </div>
  );
}

export default App;
