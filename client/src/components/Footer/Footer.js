import React from 'react';
import styled from 'styled-components';

export default function Footer() {

    const StyledAppBar = styled.div `
      background-color: #78909cab;
      font-family: 'Port Lligat Sans', sans-serif;
      opacity: .5;
      padding: 10px;
      color: #002744;
      text-align: center;
    `;

    return (
        <div>
            <StyledAppBar position="sticky">
              movieNite Copyright 2019 All Rights Reserved
            </StyledAppBar>
        </div>
    )
}