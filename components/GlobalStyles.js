import { getStatusBarHeight } from 'react-native-status-bar-height';

export const textOptions ={
    heading1: {
        fontSize: 40,
        color: '#FF5A33',
        fontFamily: 'PoppinsB'
    },

    infoText:{
        fontSize: 14,
        color: '#152833',
        fontFamily: 'RobotoMono',
    },

    darkButtonText:{
        fontSize: 16,
        color: '#FDFFE4',
        fontFamily: 'PoppinsB',
    },

    lightButtonText:{
        fontSize: 16,
        color: '#FDFFE4',
        fontFamily: 'PoppinsB',
    },

    accountInfoText:{
        fontSize: 14, 
        color: '#152833',
        fontFamily: 'RobotoMono',
    },
    accountInfoLightText:{
        fontSize: 13, 
        color: '#FDFFE4',
        fontFamily: 'RobotoMono',
        padding: 10,
    },
}

export const parameters = {
    statusBarHeight: getStatusBarHeight(),
    headerHeight: 70,
  };