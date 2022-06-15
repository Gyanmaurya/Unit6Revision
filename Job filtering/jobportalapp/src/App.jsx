
import "./NavFilter.css"
import { useState,useEffect } from 'react'

 function App  (){

 return(
   
  <div>

  
    


  </div>


 )

 }



































 export default App

    // const [data,setData] = useState([])
    // const [role,setRole] = useState([])
    // const [tech,setTech] = useState([])
    // const [exp,setExp] = useState([])
    // const [filterData,setFilterData] = useState([])
    // const [ctc,setCTC] = useState(0)
    // useEffect(()=>{
    //     getData()
    // },[])

    // async function getData(){
    //     let res = await fetch("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json")
    //     res = await res.json()
    //     // console.log(res.experience)
    //     setRole(res.role)
    //     setTech(res.technology)
    //     setExp(res.experience)
    //     setData(res.data)
    //     setFilterData(res.data)
    //     console.log(res.data)

        
    // }
    // function handleChange1(e){
    //     let x = e.target.value
    //     // console.log(e.target.value)
    //     if(x == ""){
    //         return
    //     }
    //         let newData = [...filterData]
    //         newData = newData.filter((a)=> a.role == x )
    //         setData(newData)
        
    // }
    // function handleChange2(e){
    //     let x = e.target.value
    //     // console.log(e.target.value)
    //     if(x == ""){
    //         return
    //     }
    //         let newData = [...filterData]
    //         newData = newData.filter((a)=> {
    //         if(a.technology[0]===x) {
    //             return a.technology[0]===x
    //         }
    //         if(a.technology[1]===x) {
    //             return a.technology[1]===x
    //         }
    //         if(a.technology[2]===x) {
    //             return a.technology[2]===x
    //         }

    //         })
    //         setData(newData)
        
    // }
    // function handleChange3(e){
    //     let x = e.target.value
    //     // console.log(e.target.value)
    //     if(x == ""){
    //         return
    //     }
    //         let newData = [...filterData]
    //         newData = newData.filter((a)=> a.experience == x )
    //         setData(newData)
        
    // }
    // return(
    //     <>
        /* <h1>Hello Gyan</h1>
        <div id="container">
        <div id="filter-container" >
        <div className="filterBox">
            <h4>JOB ROLE</h4>
            <select name="" id="role-filter" onChange={handleChange1}>
                <option value="">Nothing Selected</option>
                {
                    role.map((e,i)=>(
                        <option value={e} key={i} >{e}</option>
                    ))
                }
            </select>
        </div>
        <div className="filterBox">
            <h4>TECHNOLOGY</h4>
            <select name="" id="technology-filter" onChange={handleChange2}>
                <option value="">Nothing Selected</option>
                {
                    tech.map((e,i)=>(
                        <option value={e} key={i} >{e}</option>
                    ))
                }
            </select>
        </div>
        <div className="filterBox">
            <h4>EXPERIENCE</h4>
            <select name="" id="experience-filter" onChange={handleChange3}>
                <option value="">Nothing Selected</option>
                {
                    exp.map((e,i)=>(
                        <option value={e} key={i} >{e}</option>
                    ))
                }
            </select>
        </div>
        
        <div className="filterBox">
            <h4>CTC</h4>
            <select name="" id="ctc-filter">
                <option value="">Nothing Selected</option>
            </select>
        </div>
        </div>
            <div className="job-list">
                {
                    data.map((e)=>(
                        <div className={`job-list-${e.id}` }  key = {e.id} >
                            <div className="logo">
                    <div className="logo">
                        <img src={e.logo} alt="Logo" />
                    </div>
                    <div className="desc">
                        <p className="company">{e.company}</p>
                        <p className="position">{e.position}</p>
                        <div className="tech">
                        {
                            e.technology.map((x,i)=>(
                            <span className="technology" key={i} >{x} </span>
                            ))
                        }
                        </div>
                        
                    </div>
                    </div>
                    <div className="detail">
                        <span>{e.role}</span>
                        {e.technology.map((x,i)=>(
                            <span key={i}>{x}</span>
                        ))}
                        
                        <span>{e.ctc}-LPA</span>
                    </div>
                </div>
                    ))
                
                
            </div>
        </div> */
//         </>
//     )
// }
