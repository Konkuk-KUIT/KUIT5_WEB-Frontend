import React from "react";

const Content = () => {
  return (
    <div>
      <section className="post__list">
        <article className="post">
          <section className="post-middle">
            <div className="together">
              <div className="merc1">
                <img
                  src="http://www.placehold.co/240"
                  alt="상품1"
                  className="merc__img1"
                />
              </div>
              <div className="merc__info">
                <h2 className="merc__name1">에어팟 프로</h2>
                <span className="merc__comp">군자동 · 3일 전</span>
                <span className="merc__price">220,000원</span>
              </div>
            </div>
            <div className="bottom__content">
              <div className="chat">
                <img src="./assets/chat.svg" alt="채팅 수" className="chat1" />
                <div className="chat__num">3</div>
              </div>
              <div className="heart">
                <img
                  src="./assets/heart.svg"
                  alt="좋아요 수"
                  className="heart1"
                />
                <div className="heart_num">11</div>
              </div>
            </div>
          </section>
        </article>
        <article className="post">
          <section className="post-middle">
            <div className="together">
              <div className="merc1">
                <img
                  src="http://www.placehold.co/240"
                  alt="상품1"
                  className="merc__img1"
                />
              </div>
              <div className="merc__info">
                <h2 className="merc__name1">바이레도 블랑쉬 50ml</h2>
                <span className="merc__comp">광진구 구의제3동 · 26초 전</span>
                <span className="merc__price">4,000원</span>
              </div>
            </div>
            <div className="bottom__content">
              <div className="heart">
                <img
                  src="./assets/heart.svg"
                  alt="좋아요 수"
                  className="heart1"
                />
                <span className="heart_num">2</span>
              </div>
            </div>
          </section>
        </article>
        <article className="post">
          <section className="post-middle">
            <div className="together">
              <div className="merc1">
                <img
                  src="http://www.placehold.co/240"
                  alt="상품1"
                  className="merc__img1"
                />
              </div>
              <div className="merc__info">
                <h2 className="merc__name1">샌드위치</h2>
                <span className="merc__comp">
                  동대문구 휘경동 · 끌올 59초 전
                </span>
                <span className="merc__price">8,000원</span>
              </div>
            </div>
          </section>
        </article>
        <article className="post">
          <section className="post-middle">
            <div className="together">
              <div className="merc1">
                <img
                  src="http://www.placehold.co/240"
                  alt="상품1"
                  className="merc__img1"
                />
              </div>
              <div className="merc__info">
                <h2 className="merc__name1">아이폰 13프로맥스</h2>
                <span className="merc__comp">군자동 · 1일 전</span>
                <span className="merc__price">1,000,000원</span>
              </div>
            </div>
          </section>
        </article>
        <article className="post">
          <section className="post-middle">
            <div className="together">
              <div className="merc1">
                <img
                  src="http://www.placehold.co/240"
                  alt="상품1"
                  className="merc__img1"
                />
              </div>
              <div className="merc__info">
                <h2 className="merc__name1">커피머신</h2>
                <span className="merc__comp">구리시 교문1동 · 1초 전</span>
                <span className="merc__price">100,000원</span>
              </div>
            </div>
          </section>
        </article>
        <article className="post">
          <section className="post-middle">
            <div className="together">
              <div className="merc1">
                <img
                  src="http://www.placehold.co/240"
                  alt="상품1"
                  className="merc__img1"
                />
              </div>
              <div className="merc__info">
                <h2 className="merc__name1">바이레도 블랑쉬 50ml</h2>
                <span className="merc__comp">광진구 구의제3동 · 26초 전</span>
                <span className="merc__price">4,000원</span>
              </div>
            </div>
            <div className="bottom__content">
              <div className="heart">
                <img
                  src="./assets/heart.svg"
                  alt="좋아요 수"
                  className="heart1"
                />
                <span className="heart_num">2</span>
              </div>
            </div>
          </section>
        </article>
      </section>
      {/*오른쪽 메뉴 더보기 버튼*/}
      <button className="plusmenu">
        <img
          src="./assets/plusbutton.svg"
          alt="메뉴 더보기"
          className="plus__img"
        />
      </button>
    </div>
  );
};

export default Content;
