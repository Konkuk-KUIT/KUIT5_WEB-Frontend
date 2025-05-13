import * as S from "./DeliveryLocationHeader.styles.jsx"

const DeliveryLocationHeaderBase = ({mainText, isDeleverd}) => {
    return (
        <>
            <S.Greeting>
                <span style={{color: '#191F28',
                    fontFamily: 'Pretendard',
                    fontSize: '26px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal'}}>{mainText}</span>
                {isDeleverd && (<span style={{
                    color: '#333D4B',
                    fontFamily: 'Pretendard',
                    fontSize: '17px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    marginTop: '13px',
                }}>한남중앙로 40길 (한남 빌리지)(으)로 배달 {">"} </span>)}

                {/*<span>한남중앙로 40길 (한남 빌리지)(으)로 배달 ></span>*/}
            </S.Greeting>
        </>
    )
}

export default DeliveryLocationHeaderBase