import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import printImg from '../../assets/icons/Printer.svg';
import downFileImg from '../../assets/icons/FileArrowDown.svg';
import shareImg from '../../assets/icons/ShareNetwork.svg';
import refreshImg from '../../assets/icons/Refresh.svg';
import shieldImg from '../../assets/icons/Shield.svg';
import eyeOffImg from '../../assets/icons/eye-off.svg';

import {
  Container,
  ContentTop,
  Button,
  InputDateSaldo,
  InputDateSaldoDesc,
  InputSalddoDisponivel,
  IconEyeOff,
} from './styles';

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
const MainContent: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <ContentTop>
        <span>Saldo bancarion</span>
        <Button>
          <img src={printImg} alt="" />
        </Button>
        <Button>
          <img src={downFileImg} alt="" />
        </Button>
        <Button>
          <img src={shareImg} alt="" />
        </Button>
      </ContentTop>
      <InputDateSaldo>
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
        <InputDateSaldoDesc>
          <span>Saldo atualizado às 16:48</span>
          <a href="/#">
            <img src={refreshImg} alt="" />
          </a>
        </InputDateSaldoDesc>
      </InputDateSaldo>

      <InputSalddoDisponivel>
        <img src={shieldImg} alt="" />
        <div>
          <span>Sldo Disponivel</span>
          <p>R$40.000,00</p>
        </div>
        <IconEyeOff>
          <img src={eyeOffImg} alt="" />
        </IconEyeOff>
      </InputSalddoDisponivel>
    </Container>
  );
};

export default MainContent;
