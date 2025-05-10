import React from 'react';
import { ReactComponent as Mobile } from './Mobile.svg';
import { ReactComponent as WiFi } from './WiFi.svg';
import { ReactComponent as Battery } from './battery.svg';

const DeliveryLocationHeaderBase = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px'
        }}>
            <span style={{ 
                width: '54px',
                height: '21px',
                borderRadius: '24px'
            }}>9:41</span>
            <div style={{ 
                display: 'flex',
                gap: '5px'
            }}>
                <Mobile />
                <WiFi />
                <Battery />
            </div>
        </div>
    );
};

export default DeliveryLocationHeaderBase;
