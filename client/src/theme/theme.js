import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from './colors';

const Theme = getMuiTheme({
  palette: {
    primary1Color: colors.brand,
    accent1Color: colors.brand,
    textColor: colors.defaultFont,
  },
  appBar: {
    height: 60,
  },
  tableRow: {
    hoverColor: colors.lightGray,
    selectedColor: colors.lightGray,
    height: 60,
  },
  dropDownMenu: {
    accentColor: colors.brand,
  },
  snackbar: {
    textColor: colors.white,
    backgroundColor: colors.brand,
    actionColor: colors.brandDark,
  },
  toolbar: {
    backgroundColor: colors.lightGray,
    height: 60,
  },
});

export default Theme;