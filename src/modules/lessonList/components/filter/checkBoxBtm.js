import React from 'react';
import {CheckBox, ListItem, Text, View} from "native-base";

const CheckBoxBtm = ({value, onClick, title}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox color={'#F86624'} checked={value}
                          onPress={onClick}/>
            </ListItem>
            <Text style={{color: '#697268'}}>{title}</Text>
        </View>
    );
};

export default CheckBoxBtm;