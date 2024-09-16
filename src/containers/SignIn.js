import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from 'actions/Auth';


function SignIn (props){
  const {showMessage, loader, alertMessage, authUser} = props;
  const [email,setEmail] = useState('fatima.hassan@tkxel.io');
  const [password, setPassword] =useState('xyzqr23');
  const history=useHistory();
  useEffect(()=>{
    if(props.authUser===true){
      history.push('/techstore');
    }

  })
  // useEffect(() => {
  //   console.log("showMessage: ",alertMessage)
  //   if (showMessage) {
  //     NotificationManager.error(alertMessage);
  //     props.hideMessage();
  //   }
  //   console.log("authUser:",authUser)

  // }, [authUser, navigate, showMessage, alertMessage]);

  // useEffect(()=>{
  //   if (props.showMessage) {
  //     setTimeout(() => {
  //       props.hideMessage();
  //     }, 100);
  //   }
  //   if (props.authUser !== null) {
  //     props.history.push('/');
  //   }
  // },[props])
  const handleSignIn=()=>{
    props.userSignIn({email, password});
    props.showAuthLoader();
  }
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">

          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h1><IntlMessages id="appModule.email"/></h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email"/>}
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
                    defaultValue={email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password"/>}
                    fullWidth
                    onChange={(event) => setPassword(event.target.value)}
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button onClick={handleSignIn} variant="contained" color="primary">
                      <IntlMessages id="appModule.signIn"/>
                    </Button>

                    <Link to="/signup">
                      <IntlMessages id="signIn.signUp"/>
                    </Link>
                  </div>

                  <div className="app-social-block my-1 my-sm-3">
                    <IntlMessages
                      id="signIn.connectWith"/>
                    <ul className="social-link">
                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                    //   props.showAuthLoader();
                                    //   props.userFacebookSignIn();
                                    }}>
                          <i className="zmdi zmdi-facebook"/>
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      // props.showAuthLoader();
                                      // props.userTwitterSignIn();
                                    }}>
                          <i className="zmdi zmdi-twitter"/>
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      // props.showAuthLoader();
                                      // props.userGoogleSignIn();

                                    }}>
                          <i className="zmdi zmdi-google-plus"/>
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                                    onClick={() => {
                                      // props.showAuthLoader();
                                      // props.userGithubSignIn();
                                    }}>
                          <i className="zmdi zmdi-github"/>
                        </IconButton>
                      </li>
                    </ul>
                  </div>

                </fieldset>
              </form>
            </div>
          </div>

        </div>
        {
          loader &&
          <div className="loader-view">
            <CircularProgress/>
          </div>
        }
        {/* {showMessage && NotificationManager.error(alertMessage)} */}
        <NotificationContainer/>
      </div>
    );

}

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignIn);
