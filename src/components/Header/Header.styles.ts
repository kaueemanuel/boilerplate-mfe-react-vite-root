import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    background-color: #556cd6;
    color: white;
    gap: 16px;
    padding: 0 16px;

    a {
      text-decoration: none;
      color: white;
      cursor: pointer;
      font-weight: 600;
    }
  }
`
