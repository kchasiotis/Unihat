import React, {Component} from 'react'
import {ListItem, CheckBox, Text} from 'native-base'

const CredentialCheckbox = ({handleCheckbox, value}) => {
    return (
        <ListItem style={{borderBottomWidth: 0}}>
            <CheckBox onPress={()=>handleCheckbox(!value)} checked={value}/>
            <Text style={{backgroundColor: 'white', color: '#3F51B5', fontWeight: 'bold'}}> Αποθήκευση στοιχείων</Text>
        </ListItem>
    );
};

export default CredentialCheckbox;