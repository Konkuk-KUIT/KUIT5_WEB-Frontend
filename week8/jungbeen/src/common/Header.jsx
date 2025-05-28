import styled from "styled-components";

import backArrow from "../assets/images/back-arrow.svg";
import { Link } from "react-router-dom";

const HeaderBar = styled.div`
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  & img {
    width: 24px;
    height: 24px;
  }
`;
const HeaderBtn = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 600;
  color: #333d4b;
`;

function Header({ headerBtn, to }) {
  return (
    <HeaderBar>
      <Link to={"/"}>
        <img src={backArrow} alt="back-arrow" />
      </Link>
      {headerBtn && (
        <Link to={to}>
          <HeaderBtn>{headerBtn}</HeaderBtn>
        </Link>
      )}
    </HeaderBar>
  );
}

export default Header;
