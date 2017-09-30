import React, {Component} from 'react';
import {CheckBox, ListItem, Text, View} from "native-base";
import {colorPalette} from "./colorPalette";

const CheckBoxBtm = ({value, onClick, title}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
            <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox color={colorPalette.orange} checked={value}
                          onPress={onClick}/>
            </ListItem>
            <Text style={style.checkboxText}>{title}</Text>
        </View>
    );
};

const style = {
    checkboxText: {color: colorPalette.willowGrove}
};

export default CheckBoxBtm;