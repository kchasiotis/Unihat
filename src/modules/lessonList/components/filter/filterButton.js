import React from 'react'
import {Text, Button} from 'native-base';
import Theme from '../../styling/filter/filterButton'

const FilterButton = ({theme}) => {
    return (
        <Button block style={{backgroundColor: theme.buttonColor}} onPress={this.onSubmit}>
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