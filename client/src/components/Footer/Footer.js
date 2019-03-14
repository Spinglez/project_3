import React from 'react'
// import { Toolbar } from '@material-ui/core';
// import Logo from '../Logo/Logo';
import styled from 'styled-components';

export default function Footer() {

    const StyledAppBar = styled.div `
    background-color: yellowgreen;
    `;

    const styles = theme => ({
      root: {
        flexGrow: 1,
      }
    });

    return (
        <div className={styles.root}>
            <StyledAppBar position="sticky">
              movieNite.2019

            </StyledAppBar>
        </div>
    )
}