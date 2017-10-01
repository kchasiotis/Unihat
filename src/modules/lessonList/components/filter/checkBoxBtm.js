import React from 'react';
import {CheckBox, ListItem, Text, View} from "native-base";
import Theme from "../../../../../theme/components/checkBoxBtm";

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
    theme: {checkBoxColor: Theme.checkBoxColor, textColor: Theme.textColor}
};

export default CheckBoxBtm;