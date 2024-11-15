import { Link } from "react-router-dom";
import Table from "./Table";
// import dataInfo from './data.json'
import { useDataContext } from "./DataContext.jsx";
const First=()=>{

    // const header = dataInfo.pageOne.headerData;
    // const data = dataInfo.pageOne.dataInfo;
  //with normal props
  
    // return (
    //   <>
    //    <h1 className='text-3xl font-bold mb-10'>Page 1</h1>
    //    <Table headers={header} data={data}/>
    //    <Link to='/second'>Next</Link>
    //   </>
    // )

    // using contextAPI 
    const { pageOneData } = useDataContext();
    const headerData = pageOneData.headerData;
    const dataInfo = pageOneData.dataInfo;
  
    return (
      <>
        <h1 className='text-3xl font-bold mb-10'>Page 1</h1>
        <Table headers={headerData} data={dataInfo} />
        <Link to='/second'>Next</Link>
      </>
    );

}
export default First