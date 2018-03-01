import React from 'react';
import {Icon} from 'native-base';

const SettingsIcon = ({navigation}) => {
    return (
        <Icon name="settings"
              style={{paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, color: 'white'}}
              onPress={() => navigation.navigate('settings')}/>
    );
};

export default SettingsIcon
