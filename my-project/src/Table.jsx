import PropTypes from "prop-types";
const Table = (({headers, data})=>{
    return(
        <>
        {/* <h1 className="text-xl text-slate-300 font-semibold">(Just a demo)</h1> */}
        <table className="bg-white border border-gray-300 shadow-md "> 
            <thead>
                {/* for the header */}
                <tr className="text-left text-sm font-semibold bg-white p-10">
                    {headers.map((header, index)=>(
                        <th key={index}
                            className="px-10 py-1 border border-gray-300">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* for the body */}
                {data.map((row,rowIndex)=>(
                    <tr key={rowIndex}
                    className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}> 
                        {/* the style for alt rows is not working */}
                        {headers.map((col, colIndex)=>(
                            <td key={colIndex}
                                className="text-left text-xs font-medium py-1 px-10 border border-gray-300 text-gray-700"> 
                                {row[col]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
})

export default Table

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}