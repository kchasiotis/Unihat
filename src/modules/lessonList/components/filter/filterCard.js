import React from 'react';
import {Card, CardItem, Text} from "native-base";
import Theme from '../../styling/filterColorScheme'

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
    theme: {titleColor: Theme.titleColor, backgroundColor: Theme.cardBackgroundColor}
};

export default FilterCard;