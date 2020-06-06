import React, { useState, useEffect } from 'react';

function SNS() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.social-searcher.com/v2/search?q=blacklivesmatter&network=instagram&type=video,photo,status,link&limit=100")
        .then(res => res.json())
        .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    //console.log(items);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        //console.log(items.posts);
        const infos = items.posts;
        const cards = []
        for (const [index, value] of infos.entries()) {
            cards.push(
                <h1>{value.text}</h1>
            )
        }

        return (
            <>
               {cards}
            </>
        );
    }
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