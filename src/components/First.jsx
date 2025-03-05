import  {useEffect, useState} from 'react';

const First = ()=>{
    const[x,setX]=useState(20);
    const[y]=useState(20);

    const[bool,setBool]=useState(true);
    const[obj,setObj]=useState({name:'Pardhu',password:'1234'});
    const[arr,setArr]=useState([10,20,30,40,50]);
    return (
        <>
        {
            arr.map((ele,index)=>{
                return(
                    <p key={index}>{ele}</p>
                )
            })
        }
        {/* <p>{arr.map((item,index)=><button key={index}>{item}</button>)}</p> */}
        <h2>{obj.name}</h2>
        <h4>{JSON.stringify(bool)}</h4>
        <h2>First compenent</h2>
        <h3>the value of x is {x}</h3>
        <button onClick={()=>setX(x+y)}>Add</button>
        <button onClick={()=>setX(x-y)}>Sub</button>
        <button onClick={()=>setX(x*y)}>Multiply</button>
        <button onClick={()=>setX(x/y)}>Divide</button>
        </>
    )
};
 export default First;