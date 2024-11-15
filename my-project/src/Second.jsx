import Table from "./Table";
import { Link } from "react-router-dom";
import dataInfo from './data.json'
import { useDataContext } from "./DataContext";

const Second = () => {
    //using normal props
    // const header = dataInfo.pageTwo.headerData;
    // const data = dataInfo.pageTwo.dataInfo;

    // return(
    //     <>
    //         <h1 className='text-3xl font-bold mb-10 '>Page 2</h1>
    //         <Table headers={header} data={data}/>
    //         <Link to='/'>Prev.</Link>
    //     </>
    // )
  
    //using contextAPI
    const {pageTwoData} = useDataContext();
    const {headerData, dataInfo } = pageTwoData;

    return(
        <>
            <h1 className='text-3xl font-bold mb-10 '>Page 2</h1>
            <Table headers={headerData} data={dataInfo}/>
            <Link to='/'>Prev.</Link>
        </>
    )

}
export default Second;