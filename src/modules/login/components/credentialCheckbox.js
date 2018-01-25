import React from 'react'
import {ListItem, CheckBox, Text} from 'native-base'

const CredentialCheckbox = ({handleCheckbox, value}) => {
    return (
        <ListItem style={{backgroundColor: 'rgba(52, 52, 52, 00)', borderBottomWidth: 0}}>
            <CheckBox color='gray' onPress={() => handleCheckbox(!value)} checked={value}/>
            <Text onPress={() => handleCheckbox(!value)}
                  style={{color: 'white', fontWeight: 'bold'}}> Αποθήκευση στοιχείων</Text>
        </ListItem>
    );
};

export default CredentialCheckbox;