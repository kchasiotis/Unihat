import React from 'react';
import {Logout} from "../containers/logout";
import SettingsIcon from "./settings";
import {View} from "native-base";

const HeaderIconsWrapper = ({navigation}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <SettingsIcon navigation={navigation}/>
            <Logout/>
        </View>
    );
};

export default HeaderIconsWrapper;
