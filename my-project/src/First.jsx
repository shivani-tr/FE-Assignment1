import { Link } from "react-router-dom";
import Table from "./Table";
// import header1 from './data.json'
import dataInfo from './data.json'
const First=()=>{

    const header = dataInfo.pageOne.headerData;
    const data = dataInfo.pageOne.dataInfo;
  
  
    return (
      <>
       <h1 className='text-3xl font-bold '>Page 1</h1>
       <Table headers={header} data={data}/>
       <Link to='/second'>Next</Link>
      </>
    )
}
export default First