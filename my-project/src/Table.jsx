import PropTypes from "prop-types";
const Table = (({headers, data})=>{
    return(
        <>
        <h1 className="text-xl font-semibold">Just a demo</h1>
        <table className=""> 
            <thead>
                {/* for the header */}
                <tr>
                    {headers.map((header, index)=>(
                        <th key={index}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* for the body */}
                {data.map((row,rowIndex)=>(
                    <tr key={rowIndex}> 
                        {headers.map((col, colIndex)=>(
                            <td key={colIndex}> 
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