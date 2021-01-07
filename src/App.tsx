import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import MainHeader from './components/MainHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      border: 'none',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
      border: 'none',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <NavMenu />
        <div style={{ width: '100%' }}>
          <MainHeader />
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Data do Saldo"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
      </div>

      <GlobalStyle />
    </>
  );
};

export default App;
