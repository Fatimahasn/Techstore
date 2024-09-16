import React, {useEffect} from 'react';
import { MuiThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import "assets/vendors/style"
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../lngProvider';
import TechStore from './TechStore';
import {setInitUrl} from '../actions/Auth';
import { getAllCategories } from 'actions/Category';
import RTL from 'util/RTL';
import Header from 'components/Header/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
function App(props){
  const {location, locale, authUser, initURL, isDirectionRTL} = props;
 
  


  // useEffect(()=>{
  //   window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  //   if (props.initURL === '') {
  //     props.setInitUrl(props.history.location.pathname);
  //   }

  // },[props])
  

  // if (location.pathname === '/') {
  //   if (authUser === false) {
  //     return ( <Redirect to={'/signin'}/> );
  //   } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
  //     return ( <Redirect to={'/app/home'}/> );
  //   } else {
  //     return ( <Redirect to={initURL}/> );
  //   }
  // }
  const applyTheme = createTheme(defaultTheme);

  if (isDirectionRTL) {
    applyTheme.direction = 'rtl';
    document.body.classList.add('rtl')
  } else {
    document.body.classList.remove('rtl');
    applyTheme.direction = 'ltr';
  }

  const currentAppLocale = AppLocale[locale.locale];

   
    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}>
            <RTL>
              <div className="app-main">
                <Header/>
                <Switch>
                  <Redirect exact from="/" to="/techstore" />
                  <Route path='/techstore' component={TechStore}/> 
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                </Switch>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
}

const mapStateToProps = ({settings, auth, categories}) => {
  const {sideNavColor, locale, isDirectionRTL} = settings;
  const {authUser, initURL} = auth;
  const {categoriesList} = categories;
  return {sideNavColor, locale, isDirectionRTL, authUser, initURL, categoriesList}
};
export default connect(mapStateToProps, {setInitUrl, getAllCategories})(App);

