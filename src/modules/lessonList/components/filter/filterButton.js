import React from 'react'
import {Text, Button} from 'native-base';

const FilterButton = ({onPress, theme}) => {
    return (
        <Button block style={{backgroundColor: theme.buttonColor}} onPress={onPress}>
            <Text>ΕΦΑΡΜΟΓΗ</Text>
        </Button>
    );
};

FilterButton.defaultProps = {
    theme: {
        buttonColor: '#3F51B5',
    }
};

export default FilterButton;