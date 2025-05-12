import React from 'react';

const SectionHeader = () => {
    return (
        <div>
            <header style={{ 
                width: '251px',
                height: '31px',
                position: 'absolute',
                top: '25px',
                left: '24px',
                fontFamily: 'Pretendard',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '100%',
                letterSpacing: '0px',
            }}>
                오늘은 무엇을 먹을까요?
            </header>
            <p style={{ 
                width: '298px',
                height: '20px',
                position: 'absolute',
                top: '55px',
                left: '24px',
                fontFamily: 'Pretendard',
                fontWeight: 500,
                fontSize: '17px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#333D4B',
            }}>
                한남중앙로 40길 (한남 빌리지)(으)로 배달
            </p>
        </div>
    );
};

export default SectionHeader;
