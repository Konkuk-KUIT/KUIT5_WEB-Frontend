const marketModel = {
  location: "군자동",
  items: [
    {
      title: "에어팟 프로",
      location: "군자동",
      timeAgo: "3일 전",
      price: "220,000원",
      image: "/assets/post__img1.svg",
      comments: 3,
      likes: 11,
      isSold: true,
    },
    {
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      timeAgo: "26초 전",
      price: "4,000원",
      image: "/assets/post__img2.svg",
      comments: 0,
      likes: 2,
      isSold: false,
    },
    {
      title: "샌드위치",
      location: "동대문구 휘경동",
      timeAgo: "끌올 59초 전",
      price: "8,000원",
      image: "/assets/post__img3.svg",
      comments: 0,
      likes: 0,
      isSold: false,
    },
    {
      title: "아이폰 13프로맥스",
      location: "군자동",
      timeAgo: "1일 전",
      price: "1,000,000원",
      image: "/assets/post__img4.svg",
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "커피머신",
      location: "구리시 교문1동",
      timeAgo: "1초 전",
      price: "100,000원",
      image: "/assets/post__img5.svg",
      comments: 0,
      likes: 0,
      isSold: true,
    },
  ],
};

export interface PostItem {
  title: string;
  image: string;
  location: string;
  timeAgo: string;
  price: string;
  comments: number;
  likes: number;
  isSold: boolean;
}

export interface ContentProps {
  items: PostItem[];
}

export default marketModel;
