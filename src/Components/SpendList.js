import { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './Table.css'
import EntryContext from '../Store/EntryContext'
import { faTrashAlt, faCog} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SpendList = () => {
    const ctx = useContext(EntryContext)
    const OnClickHandler = () => {
        console.log('Clicked!')
    }

    const spendListEntry = ctx.spendList.map((item) => 
        <tr key={ctx.spendList[ctx.spendList.indexOf(item)]._id.toString()} onClick={OnClickHandler}>
        <td>{ctx.spendList.indexOf(item) + 1}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        <td style={{width: 140}}><Button variant='primary' style={{marginRight:'10px', marginLeft: '10px'}}><FontAwesomeIcon icon={faCog} /></Button>
            <Button variant='danger' style={{marginRight:'10px', marginLeft: '10px'}}><FontAwesomeIcon icon={faTrashAlt} /></Button>
        </td>
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
            <th>Action</th>
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