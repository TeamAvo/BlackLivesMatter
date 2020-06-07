import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <h1>Parsing {networkType} posts...</h1>
        );
    }
    if (error) return (
        <h1>Error occurred while parsing posts.</h1>
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
            <Container>
                <Row>
                    {cards}
                </Row>
            </Container>
        );
    }
}

function PostCard(props) {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return (
        <Col className="ml-auto mr-auto" md="4" xl="4">
            <Card data-background-color="black">
                <CardHeader>
                    <Nav className="nav-tabs-neutral justify-content-center"
                        data-background-color="yellow"
                        role="tablist"
                        tabs>
                        <NavItem>
                            <NavLink
                                className={iconPills === "1" ? "active" : ""}
                                href={props.url}
                            >
                                {props.network}
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                    <TabContent
                        className="text-center"
                        activeTab={"pills" + pills}
                    >
                        <p>{props.text}</p>
                        <p>#blacklivesmatter</p>
                        <p>{props.posted}</p>
                    </TabContent>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SNS;