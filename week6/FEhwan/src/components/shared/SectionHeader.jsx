import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

const SectionHeader = () => {
    let location  = useLocation()
    console.log(location.pathname);
    const [isExistBack, setIsExistBack] = useState(location.pathname === "/store");

    useEffect(() => {
        setIsExistBack(location.pathname === "/store");
    }, [location.pathname]);


    return (
        <>
            <div className="section-header" style={{background: "#FFF", width: "390px",
                height: "41px",
            padding: '7px 356px, 10px, 10px'}}>
                {isExistBack ? (<div style={{
                    width: '24px',
                    height: '24px',

                }}><img src="/public_assets/backButton.svg"/> </div>) : null}
            </div>
        </>
    )
}

export default SectionHeader