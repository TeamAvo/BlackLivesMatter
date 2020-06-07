import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SNS() {
    const [items, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const network = []

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get(
                    'https://api.social-searcher.com/v2/search?q=blacklivesmatter&network=instagram&type=video,photo,status,link&limit=100'
                );
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    const cards = [];

    if (loading) return <div>Laoding...</div>;
    if (error) return <div>ERROR........</div>;
    if (!items) return null;
    if (items) {
        const infos = items.posts;
        console.log(infos);
        infos.map((p) => (
            cards.push(
                <h1 key={p.postid}>{p.text}</h1>
            )
        ));
    }
    return (
        <ul>
            {cards}
        </ul>
    );
}

function Card(props) {
    return (
        <div>
            <h1>#blacklivesmatter - {props.index}</h1>
            <h2>{props.title}</h2>
            <h3>{props.platform}</h3>
            <h4>{props.context}</h4>
        </div>
    )
}

export default SNS;