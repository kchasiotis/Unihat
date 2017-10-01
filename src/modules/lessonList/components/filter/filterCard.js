import React from 'react';
import {Card, CardItem, Text} from "native-base";

const FilterCard = ({title, children}) => {
    return (
        <Card>
            <CardItem>
                <Text style={style.cardTitle}>{title}</Text>
            </CardItem>
            {children}
        </Card>
    );
};

const style = {
    cardTitle: {fontWeight: 'bold', color: '#333'}
};

export default FilterCard;