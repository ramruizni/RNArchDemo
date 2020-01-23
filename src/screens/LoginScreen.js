import React from 'react';
import {View} from 'react-native';
import {inject, Observer, observer} from 'mobx-react';
import LoginInteractor from '../interactors/LoginInteractor';
import styles from './styles/LoginStyles';
import Shell from './base/Shell';
import Input from '../components/Input';
import DeployableInput from '../components/DeployableInput';
import Button from '../components/Button';
import Bkg from '../components/Bkg';
import {useForm} from '../utils/useForm';
import UserStore from '../stores/UserStore';

const INITIAL_VALUES = {bank: null, email: '', password: ''};

const LoginScreen = ({navigation}) => {
  const [values, handleChange, errors, handleSubmit, onBlur, onFocus] = useForm(INITIAL_VALUES);
  const inter = new LoginInteractor(navigation);

  return (
    <Shell>
      <Bkg />
      <View style={styles.main}>
        <DeployableInput
          value={values.bank}
          placeholder="Bank"
          data={UserStore.banks}
          itemPress={it => handleChange(it, 'bank')}
          image={require('../assets/bank.png')}
        />
        <Input
          value={values.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          keyboardType="email-address"
          image={require('../assets/email.png')}
        />
        <Input
          value={values.password}
          placeholder="Password"
          onChangeText={it => handleChange(it, 'password')}
          image={require('../assets/password.png')}
        />
        <Button style={styles.loginBtn} title="LOGIN" onPress={() => inter.handleLogin()} />
      </View>
    </Shell>
  );
};

LoginScreen.navigationOptions = {header: null};
export default LoginScreen;
