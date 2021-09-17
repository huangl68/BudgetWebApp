
import { Col, Container, Row, Form, Button} from 'react-bootstrap';
import React, {useRef, useState, useEffect} from 'react';
import {getCategory} from '../API/EntryAPI'


const InputEntry = (props) => {

    const CategoryRef = useRef()
    const DescriptionRef = useRef()
    const AmountRef = useRef()

    const [category, setcategory] = useState([]);
    let temp = <div></div>

    useEffect(
        ()=> {
            async function fetchData() {
                const data = await getCategory();
                setcategory(data)
            }
            fetchData();
        }, [])
    
    if (category.length > 0){
        temp = category[0].category.map((item) => <option value={item}>{item}</option>)
    }

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
                <Button onClick={() => props.onAdd({
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