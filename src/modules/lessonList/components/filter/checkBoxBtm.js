import React from 'react';
import {CheckBox, ListItem, Text, View} from "native-base";
import Theme from "../../styling/filterColorScheme";

const CheckBoxBtm = ({value, onClick, title, theme}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox color={theme.checkBoxColor} checked={value}
                          onPress={onClick}/>
            </ListItem>
            <Text style={{color: theme.labelColor}}>{title}</Text>
        </View>
    );
};

CheckBoxBtm.defaultProps = {
    theme: {checkBoxColor: Theme.primaryColor, labelColor: Theme.labelColor}
};

export default CheckBoxBtm;