import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader({ 
    customStyles,
    customHeight,
    customTop,
    customBgColor,
    }) {
    return (
      <View style={customStyles}>
        <View style={{ backgroundColor: customBgColor, height: customHeight }}>
          <Svg
            height="90%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: customTop }}
          >
            <Path
              fill={ customBgColor }
              d="M0,64L34.3,64C68.6,64,137,64,206,69.3C274.3,75,343,85,411,117.3C480,149,549,203,617,234.7C685.7,267,754,277,823,234.7C891.4,192,960,96,1029,69.3C1097.1,43,1166,85,1234,117.3C1302.9,149,1371,171,1406,181.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"/>
          </Svg>
        </View>
      </View>
    );
  }