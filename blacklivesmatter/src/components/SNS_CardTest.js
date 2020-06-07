import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'index.css';

import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

function SNS() {
    return (
        <Container className="noMargin">
            <Row>
                <PostCard
                    key="key"
                    url="url"
                    network="network"
                    text="text"
                    posted="posted"
                />
            </Row>
        </Container>
    );
}

function PostCard(props) {
    return (
        <Col className="ml-auto mr-auto" md="10" xl="2">
            <Card className="dark">
                <CardHeader>
                    <Nav className="nav-tabs-neutral justify-content-center yel"
                        role="tablist"
                        tabs>
                        <NavItem>
                            <NavLink
                                href={props.url}
                            >
                                <h3 className="noMargin">{props.network}</h3>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                    <TabContent
                        className="text-center"
                    >
                        <p>{props.text}</p>
                        <p>{props.posted}</p>
                    </TabContent>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SNS;