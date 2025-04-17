"use client";
import React from "react";
import styled from "styled-components";

const Button = ({ title }: { title: string }) => {
  return (
    <StyledWrapper>
      <button>{title}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --color: var(--secondary);
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    overflow: hidden;
    cursor: pointer;
    margin: 20px 20px 20px 0;
    font-size: 17px;
    z-index: 1;
    color: var(--color);
    border: 2px solid var(--color);
    border-radius: 6px;
    position: relative;
  }

  button::before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 200px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  button:hover {
    color: white;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  button:hover::before {
    top: -30px;
    left: -30px;
  }
`;

export default Button;
