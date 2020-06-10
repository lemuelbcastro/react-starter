import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import DateFnsUtils from '@date-io/date-fns';

import { SnackbarHelperConfigurator } from '../../common/utils/snackbarHelper';
import theme from '../../theme';
import Routes from '../Routes';
import LoadingSpinner, {
  LoadingSpinnerContextProvider
} from '../UI/LoadingSpinner';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadingSpinnerContextProvider>
        <LoadingSpinner />
        <SnackbarProvider maxSnack={1}>
          <SnackbarHelperConfigurator />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Routes />
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </LoadingSpinnerContextProvider>
    </ThemeProvider>
  );
}

export default App;
