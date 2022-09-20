import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState('');
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/kimsumi701/react-hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img}></img>
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                    <div>{product?.choice == true ? 'Conscious choice' : ''}</div>
                    <div>{product?.new == true ? '신제품' : ''}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu>{product?.size.length > 0 && product.size.map((item) => <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>)}</Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark">추가</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
