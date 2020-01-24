import React from 'react';
import {View} from 'react-native';
import LoginInteractor from '../interactors/LoginInteractor';
import styles from './styles/LoginStyles';
import Shell from './base/Shell';
import Input from '../components/Input';
import DeployableInput from '../components/DeployableInput';
import Button from '../components/Button';
import Bkg from '../components/Bkg';
import {useForm, validateLogin} from '../utils/useForm';
import UserStore from '../stores/UserStore';

const INITIAL_VALUES = {bank: null, email: '', password: ''};

const LoginScreen = ({navigation}) => {
  const inter = new LoginInteractor(navigation);
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    isSubmitting
  } = useForm(INITIAL_VALUES, validateLogin, () => inter.handleLogin(values));

  return (
    <Shell>
      <Bkg />
      <View style={styles.main}>
        <DeployableInput
          value={values.bank}
          placeholder="Bank"
          data={UserStore.banks}
          itemPress={it => handleChange(it, 'bank')}
          error={errors.bank}
          image={require('../assets/bank.png')}
        />
        <Input
          value={values.email}
          placeholder="Email"
          onChangeText={it => handleChange(it, 'email')}
          onBlur={handleBlur}
          error={errors.email}
          keyboardType="email-address"
          image={require('../assets/email.png')}
        />
        <Input
          value={values.password}
          placeholder="Password"
          onChangeText={it => handleChange(it, 'password')}
          onBlur={handleBlur}
          error={errors.password}
          image={require('../assets/password.png')}
        />
        <Button
          style={styles.loginBtn}
          title="LOGIN"
          enabled={!isSubmitting}
          onPress={handleSubmit}
        />
      </View>
    </Shell>
  );
};

export default LoginScreen;
