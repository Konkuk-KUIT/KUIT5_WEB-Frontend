import React from "react";
import MainText from "../home/MainText";
import RatingsInfoItem from "./RatingsInfoItem";
import styles from "./StoreInfoBox.module.scss";
import StoreInfoItem from "./StoreInfoItem";

const storeInfoData = [
  { 결제방법: "토스결제만 현장결제 안됨" },
  { 최소주문: "13,000원" },
  { 배달시간: "약 15분~25분" },
];

const StoreInfoBox = () => {
  return (
    <div className={styles.box}>
      <MainText style="large" text="샐로리 한남점" />
      <RatingsInfoItem rating={4.9} reviewNum={3919} />
      {storeInfoData.map((item, index) => {
        const [key, value] = Object.entries(item)[0];
        return <StoreInfoItem key={index} label={key} value={value} />;
      })}
    </div>
  );
};

export default StoreInfoBox;
