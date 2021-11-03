import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

class Account extends Component {
  render() {
    const AppContainer = styled.View({
      padding: 20,
    });

    const AppSignUpContainer = styled.View({});

    const AppAccountContainer = styled.View({});

    const AppTitle = styled.Text({
      color: '#000',
      fontWeight: 600,
      fontSize: 26,
    });

    const AppInput = styled.TextInput({});

    const AppSignUpButton = styled.Text({
      color: '#fff',
      backgroundColor: '#cecece',
      borderRadius: 10,
      height: 44,
      textAlign: 'center',
      lineHeight: 44,
    });

    const AppLogOutButton = styled.Text({
      color: '#f00',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#f00',
      height: 44,
      textAlign: 'center',
      lineHeight: 44,
    });

    const AppUserName = styled.Text({
      color: '#000',
      fontWeight: 600,
      fontSize: 30,
    });

    const AppText = styled.Text({
      color: '#000',
      fontSize: 16,
    });

    return (
      <AppContainer>
        <AppTitle>Account</AppTitle>
        {/* <AppSignUpContainer>
          <AppInput placeholder="E-mail"></AppInput>
          <AppInput placeholder="Password"></AppInput>
          <TouchableOpacity>
            <AppSignUpButton>Sign Up</AppSignUpButton>
          </TouchableOpacity>
        </AppSignUpContainer> */}

        <AppAccountContainer>
          <AppUserName>Idris Cumali</AppUserName>
          <AppText>E-mail: idriscumali@gmail.com</AppText>
          <AppText>Password: 231das</AppText>
          <AppText>Current locale: TR</AppText>
          <TouchableOpacity>
            <AppLogOutButton>Log Out</AppLogOutButton>
          </TouchableOpacity>
        </AppAccountContainer>
      </AppContainer>
    );
  }
}

export default Account;
