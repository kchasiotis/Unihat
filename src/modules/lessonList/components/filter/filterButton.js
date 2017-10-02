import React from 'react'
import {Text, Button} from 'native-base';
import Theme from '../../styling/filterColorScheme'

const FilterButton = ({onPress, theme}) => {
    return (
        <Button block style={{backgroundColor: theme.buttonColor}} onPress={onPress}>
            <Text>ΕΦΑΡΜΟΓΗ</Text>
        </Button>
    );
};

FilterButton.defaultProps = {
    theme: {
        buttonColor: Theme.buttonColor,
    }
};

export default FilterButton;