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
    const [loading, setLoading] = useState(false);
    const [networkType, setType] = useState("");
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setData(null);
                setLoading(true);
                setType("Web");
                var url = 'https://api.social-searcher.com/v2/search?q=blacklivesmatter&network=web&type=video,photo,status,link&limit=100';
                const responseW = await axios.get(url);
                setType("Facebook");
                var url = 'https://api.social-searcher.com/v2/search?q=blacklivesmatter&network=facebook&type=video,photo,status,link&limit=100';
                const responseF = await axios.get(url);
                setType("Twitter");
                var url = 'https://api.social-searcher.com/v2/search?q=blacklivesmatter&network=twitter&type=video,photo,status,link&limit=100';
                const responseT = await axios.get(url);
                setType("Instagram");
                var url = 'https://api.social-searcher.com/v2/search?q=blacklivesmatter&network=instagram&type=video,photo,status,link&limit=100';
                const responseI = await axios.get(url);
                const arr = [];
                const data = arr.concat(responseW, responseF, responseT, responseI);
                setData(data);
            } catch (e) {
                console.log(e);
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <Container>
                <h1>Parsing {networkType} posts...</h1>
            </Container>
        );
    }
    if (error) return (
        <Container>
            <h1>Error occurred while parsing posts.</h1>
            <h3>{error.toString()}</h3>
        </Container>
    );
    if (!data) {
        return null;
    } else {
        const arr = [];
        const posts = arr.concat(data[0].data.posts, data[1].data.posts, data[2].data.posts, data[3].data.posts);
        const cards = [];
        console.log(posts);
        if (posts != null) {
            const infos = posts;
            infos.map((p) => (
                cards.push(
                    <PostCard
                        key={p.postid}
                        url={p.url}
                        network={p.network}
                        text={p.text}
                        posted={p.posted}
                    />
                )
            ));
        }
        return (
            <Container className="noMargin">
                <Row>
                    {cards}
                </Row>
            </Container>
        );
    }
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