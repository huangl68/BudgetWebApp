
import { Col, Container, Row, Form, Button} from 'react-bootstrap';
import React, {useRef, useContext} from 'react';
import EntryContext from '../Store/EntryContext';

const InputEntry = () => {

    const CategoryRef = useRef()
    const DescriptionRef = useRef()
    const AmountRef = useRef()

    const ctx = useContext(EntryContext)
    const category = ctx.categoryList
    
    const temp = category.map((item) => <option key={category.indexOf(item)} value={item}>{item}</option>)

    return ( 
        <div className="put-bottom">
        <Container>
            <Row>
                <Col>
                <Form.Select ref = {CategoryRef} aria-label="Default select example">
                    <option>Categories</option>
                    {temp}
                </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Control ref={DescriptionRef} type="text" placeholder="Description"/>
                </Col>
                <Col>
                <Form.Control ref={AmountRef} type="number" placeholder="Amount"/>
                </Col>
                <Col>
                <Button onClick={() => ctx.addEntry({
                        "category": CategoryRef.current.value,
                        "description": DescriptionRef.current.value,
                        "amount": AmountRef.current.value
       })} variant="success">Add</Button>{' '}
                </Col>

            </Row>
        </Container>
        </div>

     );
}
 
export default InputEntry;