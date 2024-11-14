import Table from "./Table";
import { Link } from "react-router-dom";

const Second = () => {

    const header = ['Company', 'Contact', 'Country'];
    const data = [
      { Company: 'Clfedro Fransis', Contact: 'Maria Jones', Country: 'USA' },
      { Company: 'Gmith and co', Contact: 'Shawn Trevor', Country: 'Canada' },
      { Company: 'Mreen olives', Contact: 'Ben Illinois', Country: 'UK' },
      { Company: 'Fransis', Contact: 'Maria Jones', Country: 'USA' },
      { Company: 'John and co', Contact: 'Shawn Trevor', Country: 'Canada' },
    ]

    return(
        <>
            <h1 className='text-3xl font-bold '>Page 2</h1>
            <Table headers={header} data={data}/>
            <Link to='/'>Prev.</Link>
        </>
    )
  

}
export default Second;