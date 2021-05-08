import React from 'react'

const Datatable = ({ data }) => {
    // const columns = data[0] && Object.keys(data[0])
    // console.log(columns);
    const columns = ['noPasien_id', 'status', 'tanggal', 'usia'];
    console.log('hallo', data?.data)

    return (
        <table cellPadding={10} cellSpacing={30}>
            <thead>
                <tr>{data && columns.map(heading => <th>{ heading}</th>)}</tr>
            </thead>
            <tbody>
                {   
                    data?.data?.map((items) => (
                        <tr>
                            {columns?.map((col) => (
                                <td>{items[col] }</td>
                            ))}
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
    )
}

export default Datatable