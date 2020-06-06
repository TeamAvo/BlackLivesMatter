import React from 'react'

const cardInfo = [["Title", "Platform", "Context", "Date"], ["A", "Facebook", "Test1", "Date"], ["B", "Youtube", "Test2", "Date"]]

function SNS(){
    const items = []
    for (const [index, value] of cardInfo.entries()) {
        items.push(<Card index={index} title={value[0]} platform={value[1]} context={value[2]} />);
    }
    return(
        <div>
            {items}
        </div>
    )
}

function Card(props){
    return(
        <div>
            <h1>#blacklivesmatter - {props.index}</h1>
            <h2>{props.title}</h2>
            <h3>{props.platform}</h3>
            <h4>{props.context}</h4>
        </div>
    )
}

export default SNS