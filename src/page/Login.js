import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        // 사용시 새로고침 되지 않음(form 태그에서 필수)
        event.preventDefault();
        setAuthenticate(true);
        navigate('/');
    };
    return (
        <div>
            <Container>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="아이디 저장" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        로그인
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
