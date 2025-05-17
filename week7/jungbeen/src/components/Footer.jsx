import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function Footer({ setResetKey }) {
  return (
    <FooterDiv>
      <button
        style={{ width: "500px" }}
        onClick={() => {
          setResetKey((prev) => prev + 1);
        }}
      >
        reset/restart
      </button>
    </FooterDiv>
  );
}

export default Footer;
