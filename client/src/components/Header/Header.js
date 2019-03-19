import React from 'react'
import { Toolbar } from '@material-ui/core';
import Logo from '../Logo/Logo';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function Header() {

    const StyledAppBar = styled.div `
    background-color: #002744
    `;

    const styles = theme => ({
    root: {
      flexGrow: 1,
    }
    });

    return (
        <div className={styles.root}>
            <StyledAppBar position="static">
                <Toolbar style={{ display: "flex", justifyContent: "space-between"}}>
                    <Logo />
                        <div>
                        <Button variant="contained" color="secondary" size="small">
                            Log Out
                        </Button>
                        </div>
                </Toolbar>
            </StyledAppBar>
        </div>
    )
}
