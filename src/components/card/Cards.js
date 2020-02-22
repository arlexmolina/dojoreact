import React from 'react';
import Card from './Card';

const cards = (props) => {

    console.log('props', props);
    const cards = props.data.map(card => {
        return (
            <Card
                key={card['_id']}
                titulo={card.title}
                contenido={card.content}
                responsable={card.responsible} >
            </Card>
        );
    });

    return (


        <div>
            {cards}
        </div>

    );
}

export default cards;