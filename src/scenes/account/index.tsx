import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import * as COLORS from '../../styles/colors';
import {
  AppContainer,
  AppSignUpContainer,
  AppAccountContainer,
  AppTitle,
  AppLocaleTitle,
  AppInput,
  AppInputStyleProps,
  AppSignUpButton,
  AppLogOutButton,
  AppUserName,
  AppText,
  AppPickerContainer,
  AppDivider
} from './styled';

class Account extends Component {
  constructor({props}: any) {
    super(props);
  }

  state = {
    selectedLocale: 'tr',
    email: '',
    password: '',
    isLogged: false,
    emailIsValid: false,
  };

  handleEmailChange = (val: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) === true) {
      this.setState({
        email: val,
        emailIsValid: true,
      });
    } else {
      this.setState({
        email: val,
        emailIsValid: false,
      });
    }
  };

  signup = () => {
    if (!this.state.emailIsValid && this.state.password.length < 5) return true;
    this.setState({isLogged: true});
  };

  logout = () => {
    this.setState({
      email: '',
      password: '',
      isLogged: false,
    });
  };

  passwordFormat = (value: string) => {
    value = value.substr(0, value.length - 3);
    return `${value}***`;
  };

  renderPickerComponent = () => {
    return (
      <AppPickerContainer>
        <AppLocaleTitle>Locale</AppLocaleTitle>
        <Picker
          selectedValue={this.state.selectedLocale}
          style={{
            height: 45,
            width: '100%',
          }}
          onValueChange={value => this.setState({selectedLocale: value})}>
          <Picker.Item label="Türkçe" value="tr" />
          <Picker.Item label="İngilizce" value="en" />
        </Picker>
      </AppPickerContainer>
    );
  };

  renderSignUp = () => {
    return (
      <AppSignUpContainer>
        <AppInput
          {...AppInputStyleProps}
          label="E-posta"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={value => this.handleEmailChange(value)}></AppInput>
        <AppInput
          {...AppInputStyleProps}
          label="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={value => this.setState({password: value})}></AppInput>

        {this.renderPickerComponent()}

        <TouchableOpacity>
          <AppSignUpButton
            style={
              this.state.emailIsValid && this.state.password.length > 5
                ? {backgroundColor: COLORS.HELPER_RED}
                : undefined
            }
            onPress={() => this.signup()}>
            Sign Up
          </AppSignUpButton>
        </TouchableOpacity>
      </AppSignUpContainer>
    );
  };

  renderAccount = () => {
    return (
      <AppAccountContainer>
        <AppUserName>Idris Cumali</AppUserName>
        <AppText>E-mail: {this.state.email}</AppText>
        <AppText>Password: {this.passwordFormat(this.state.password)}</AppText>
        <AppText>
          Current locale: {this.state.selectedLocale.toUpperCase()}
        </AppText>
        <AppDivider></AppDivider>
        {this.renderPickerComponent()}
        <TouchableOpacity
          onPress={() => this.logout()}
          style={{position: 'absolute', width: '100%', bottom: 0}}>
          <AppLogOutButton>Log Out</AppLogOutButton>
        </TouchableOpacity>
      </AppAccountContainer>
    );
  };

  render() {
    return (
      <AppContainer>
        <AppTitle>Account</AppTitle>
        {!this.state.isLogged ? this.renderSignUp() : this.renderAccount()}
      </AppContainer>
    );
  }
}

export default Account;
