import React from 'react';
import {Card, CardItem, Text} from "native-base";

const FilterCard = ({title, children, theme}) => {
    return (
        <Card style={{backgroundColor: theme.backgroundColor}}>
            <CardItem style={{backgroundColor: theme.backgroundColor}}>
                <Text style={{fontWeight: 'bold', color: theme.titleColor}}>{title}</Text>
            </CardItem>
            {children}
        </Card>
    );
};

FilterCard.defaultProps = {
    theme: {titleColor: '#333', backgroundColor: '#FFF'}
};

export default FilterCard;