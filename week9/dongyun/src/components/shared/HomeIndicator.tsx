import styled from 'styled-components';

const HomeIndicatorWrapper = styled.div`
    width: 390px;
    height: 34px;
    padding: 21px 128px 8px 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    box-sizing: border-box;
`;

const IndicatorBar = styled.div`
    width: 134px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #000;
`;

const HomeIndicator = () => {
    return (
        <HomeIndicatorWrapper>
            <IndicatorBar/>
        </HomeIndicatorWrapper>
    );
};

export default HomeIndicator;
