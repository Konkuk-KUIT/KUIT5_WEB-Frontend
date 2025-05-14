import React from 'react';

const OrderFooter = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '390px',
            height: '111px',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            boxShadow: '0px -8px 16px 0px #0000001A',
            position: 'relative' // 추가된 부분
        }}>
            <div>
                <div style={{ 
                    fontFamily: 'Pretendard',
                    fontWeight: '400',
                    fontSize: '12px', 
                    color: '#888',
                    width: '69px',
                    height: '18px',
                    position: 'absolute', // 추가된 부분
                    top: '16px',
                    left: '24px'
                }}>
                    총 주문금액
                </div>
                <div style={{ 
                    fontFamily: 'Pretendard',
                    fontSize: '16px', 
                    fontWeight: 'bold',
                    width: '66px',
                    height: '20px',
                    position: 'absolute', // 추가된 부분
                    top: '39px',
                    left: '24px'
                }}>
                    12,100원
                </div>
            </div>
            <button style={{ 
                backgroundColor: '#007bff', 
                color: '#fff',
                width: '84px',
                height: '38px',
                position: 'absolute', // 추가된 부분
                top: '19px',
                left: '282px',
                borderRadius: '8px'
            }}>
                주문하기
            </button>
        </div>
    );
};

export default OrderFooter;
