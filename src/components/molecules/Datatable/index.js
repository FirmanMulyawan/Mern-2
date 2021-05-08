import React from 'react'
import './dataTable.scss'
import Link from '../../atoms/Link';
import Gap from '../../atoms/Gap';

const Datatable = ({ data }) => {
    const columns = ['tanggal', 'noPasien_id','usia',  'status', 'action'];

    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data && columns.map(heading => <th>{ heading}</th>)}</tr>
            </thead>
            <tbody>
                {   
                    data?.data?.map((items) => (
                        <tr>
                            {columns?.map((col) => {
                                if (col !== "action") {
                                return (
                                        <td>{items[col]}</td>
                                )   
                                } else {
                                    return (
                                        
                                        <td>
                                            <div style={{display: 'flex'}}>
                                                <Link title='Edit' />
                                                <Gap width={20}/>
                                            <Link title='Delete' />
                                            </div>
                                        </td>
                                    )
                                }
                            })
                            }
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
    )
}

export default Datatable