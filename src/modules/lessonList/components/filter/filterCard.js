import React from 'react';
import {Card, CardItem, Text} from "native-base";

const FilterCard = ({title, children}) => {
    return (
        <Card style={{backgroundColor: '#FFF', marginTop: 0, marginBottom: 10}}>
            <CardItem style={{backgroundColor: '#FFF'}}>
                <Text style={{fontWeight: 'bold', color: '#333'}}>{title}</Text>
            </CardItem>
            {children}
        </Card>
    );
};

export default FilterCard;