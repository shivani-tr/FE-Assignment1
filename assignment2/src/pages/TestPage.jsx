import { Link } from "react-router-dom";
import TestTable from "../components/core/TestTable.jsx"
import dataInfo from '../data/testTable.json'
const TestPage=()=>{

    const header = dataInfo.pageOne.headerData;
    const data = dataInfo.pageOne.dataInfo;
//   with normal props
  
    return (
      <>
       <h1 className='text-3xl text-black/70 font-bold mb-10'>Assignment-1</h1>
       <TestTable headers={header} data={data}/>
      </>
    )
  

}
export default TestPage