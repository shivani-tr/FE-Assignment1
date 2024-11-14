import { Link } from "react-router-dom";
import Table from "./Table";
// import header1 from './data.json'
const First=()=>{

    const header = ['Company', 'Contact', 'Country'];
    const data = [
      { Company: 'Alfedro Fransis', Contact: 'Maria Jones', Country: 'USA' },
      { Company: 'Smith and co', Contact: 'Shawn Trevor', Country: 'Canada' },
      { Company: 'Green olives', Contact: 'Ben Illinois', Country: 'UK' },
      { Company: 'Alfedro Fransis', Contact: 'Maria Jones', Country: 'USA' },
      { Company: 'Smith and co', Contact: 'Shawn Trevor', Country: 'Canada' },
      { Company: 'Green olives', Contact: 'Ben Illinois', Country: 'UK' },
    ]
  
  
    return (
      <>
       <h1 className='text-3xl font-bold '>Page 1</h1>
       <Table headers={header} data={data}/>
       <Link to='/second'>Next</Link>
      </>
    )
}
export default First