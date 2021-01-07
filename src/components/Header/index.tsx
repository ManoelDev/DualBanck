import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import { HeaderContainer, HeaderLefth, HeaderRight, Logo, ProfileImg } from './styles';

import logoImg from '../../assets/images/logo.svg';
import chatImg from '../../assets/icons/ChatText.svg';
import calendarImg from '../../assets/icons/Calendar.svg';
import bellImg from '../../assets/icons/Bell.svg';
import eyeOffImg from '../../assets/icons/eye-off.svg';

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
      marginLeft: 16,
      color: '#172765',
    },
    selectEmpty: {
      color: '#172765',
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();

  const [state, setState] = React.useState<{ agc: string | number; account: string }>({
    agc: '',
    account: '',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <HeaderContainer>
      <HeaderLefth>
        <Logo src={logoImg} alt="DualBank" />
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={state.agc}
            onChange={handleChange}
            name="agc"
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'agc' }}
          >
            <option value={10}>Conta Corrente</option>
            <option value={20}>Comnta Poupança</option>
            <option value={30}>C.C. Ed. Suzano</option>
            <option value={30}>C.C. Condomínio Guillermo</option>
            <option value={30}>C.C. Residencial Figma Ômega</option>
          </NativeSelect>
          <FormHelperText>Ag. 00005-1 C.C. 00000000000000000020-1</FormHelperText>
        </FormControl>
        <div className="saldo">
          <span>
            Saldo
            <img src={eyeOffImg} alt="Ocultar saldo" />
          </span>
          <p>R$ 40.000,00</p>
        </div>
      </HeaderLefth>

      <HeaderRight>
        <input type="text" placeholder="Pesquisar" />
        <a href="/">
          <img src={chatImg} alt="Bate Papo" />
        </a>
        <a href="/">
          <img src={calendarImg} alt="Calendario" />
        </a>
        <a href="/">
          <img src={bellImg} alt="Notificações" />
        </a>
        <ProfileImg src="https://github.com/ManoelDev.png" alt="Notificações" />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
