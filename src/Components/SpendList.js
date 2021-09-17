import Table from 'react-bootstrap/Table'
import './Table.css'

const SpendList = (props) => {
    const spendListEntry = props.data.map((item) => 
        <tr key={props.data.indexOf(item) + 1}>
        <td>{props.data.indexOf(item) + 1}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        </tr>)
    
    return ( 
        <div className='board-spacing'>
        <Table bordered >
        <thead>
            <tr>
            <th>#</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {spendListEntry}
        </tbody>
        </Table>
        
        
        </div>
        
    
    );
}
 
export default SpendList;