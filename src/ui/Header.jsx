import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
