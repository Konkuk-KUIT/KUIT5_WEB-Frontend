import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const SectionHeader = () => {
    let location  = useLocation()
    console.log(location.pathname);
    const [isExistBack, setIsExistBack] = useState(location.pathname !== "/");
    const [isOrderNow, setIsOrderNow] = useState(false);

    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1)
    }

    useEffect(() => {
        setIsExistBack(location.pathname !== "/");
        setIsOrderNow(location.pathname === '/cart')
    }, [location.pathname]);


    return (
        <>
            <div className="section-header" style={{background: "#FFF", width: "390px",
                height: "41px",
                padding: '7px 356px, 10px, 10px',
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
                }}>
                {isExistBack ? (
                    <div style={{
                    width: '24px',
                    height: '24px',
                        paddingTop:'7px',
                }}
                onClick={goBack}
                ><img src="/public_assets/backButton.svg"/> </div>) : null}
                {isOrderNow ? (
                    <div style={{
                        width:'56px',
                        height: '19px',
                        padding: '9px 15px 10px 10px',
                        color: '#333D4B',
                        fontSize: '16px',
                        fontFamily: 'Pretendard',
                        fontWeight: '600',
                        wordWrap: 'break-word'
                    }}>
                        주문취소
                    </div>
                ): null}
            </div>
        </>
    )
}

export default SectionHeader