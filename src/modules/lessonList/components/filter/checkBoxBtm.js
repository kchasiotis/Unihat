import React, {Component} from 'react';
import {CheckBox, ListItem, Text, View} from "native-base";
import {checkBoxBtm} from "../../../../../theme/components/checkBoxBtm";

const CheckBoxBtm = ({value, onClick, title, theme}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox color={theme.checkBoxColor} checked={value}
                          onPress={onClick}/>
            </ListItem>
            <Text style={{color: theme.textColor}}>{title}</Text>
        </View>
    );
};

CheckBoxBtm.defaultProps = {
    theme: {checkBoxColor: checkBoxBtm.checkBoxColor, textColor: checkBoxBtm.textColor}
};

export default CheckBoxBtm;