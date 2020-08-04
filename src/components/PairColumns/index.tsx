import React, { FC, ReactNode } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';

interface IProps {
    children: [ReactNode, ReactNode];
}

const PairColumns: FC<IProps> = props => {
    const { children } = props;

    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className="my-paper">{children[0]}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className="my-paper">{children[1]}</Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PairColumns;
