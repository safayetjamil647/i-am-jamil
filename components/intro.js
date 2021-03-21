import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        fontFamily: 'Raleway',
        fontSize: '40px',
        margin: '100px 0px 0px 0px',
    },
    elemtwo: {
        fontSize: '90px',
        color: 'white',
        margin: '5px 0px 0px 20px',
        fontFamily: 'Raleway',
        fontWeight: 'bold',
    },
    elemthree: {
        fontSize: '90px',
        color: 'white',
        margin: '0px 0px 10px 20px',
        fontFamily: 'Raleway',
        fontWeight: 'bold',
    },
});


const Intro = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">

                <Typography component="div" style={{ backgroundColor: '#FF6161', height: '80vh' }} >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"

                    >
                        <Typography className={classes.root}>I'm Safayet Jamil.</Typography>
                        <Typography className={classes.elemtwo}>A Fullstack</Typography>
                        <Typography className={classes.elemthree}>Applcation Developer.</Typography>
                    </Grid>

                </Typography>

            </Container>
        </React.Fragment>
    );
}

export default Intro;