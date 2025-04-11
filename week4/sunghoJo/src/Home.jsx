import React from "react";
import "./Home.css";
import Header from "./components/Header";
import ProductPost from "./components/ProductPost";
import BottomBar from "./components/BottomBar";

const Home = () => {
  // 상품 데이터 배열
  const products = [
    {
      id: 1,
      image: "/assets/airpods-pro.svg",
      alt: "상품 사진",
      title: "에어팟 프로",
      location: "군자동",
      date: "3일 전",
      price: "220,000원",
      likes: 11,
      chats: 3,
      isSold: false,
    },
    {
      id: 2,
      image: "/assets/byredo-blanche.svg",
      alt: "상품 사진",
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      date: "26초 전",
      price: "4,000원",
      likes: 2,
      isSold: true,
    },
    {
      id: 3,
      image: "/assets/sandwich.svg",
      alt: "상품 사진",
      title: "샌드위치",
      location: "동대문구 휘경동",
      date: "끌올 59초 전",
      price: "8,000원",
      isSold: false,
    },
    {
      id: 4,
      image: "/assets/iPhone13ProMax.svg",
      alt: "상품 사진",
      title: "아이폰 13프로맥스",
      location: "군자동",
      date: "1일 전",
      price: "1,000,000원",
      isSold: true,
    },
    {
      id: 5,
      image: "/assets/coffeemachine.svg",
      alt: "상품 사진",
      title: "커피머신",
      location: "구리시 교문1동",
      date: "1초 전",
      price: "100,000원",
      isSold: false,
    },
    {
      id: 6,
      image: "/assets/dog.svg",
      alt: "가나디",
      title: "프리허그",
      location: "강남구 수서동",
      date: "1주 전",
      price: "0원",
      isSold: true,
    },
  ];

  // isSold: true인 상품만 필터링
  const soldProducts = products.filter((product) => product.isSold);

  return (
    <div className="home-container">
      <Header />
      <article className="post">
        {/* isSold: true인 상품만 렌더링 */}
        {soldProducts.map((product) => (
          <ProductPost key={product.id} product={product} />
        ))}
      </article>
      <BottomBar />
    </div>
  );
};

export default Home;
