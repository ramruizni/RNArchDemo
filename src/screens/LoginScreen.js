import React from 'react';
import {ScrollView, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import LoginInteractor from '../interactors/LoginInteractor';
import styles from './styles/LoginStyles';
import Shell from './base/Shell';
import Input from '../components/Input';
import DeployableInput from '../components/DeployableInput';
import Button from '../components/Button';
import Bkg from '../components/Bkg';
import {Formik} from 'formik';

@inject('userStore')
@observer
export default class extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.inter = new LoginInteractor(this);
  }

  render() {
    const {userStore} = this.props;
    return (
      <Shell barStyle="blue">
        <Bkg />
        <ScrollView>
          <View style={styles.main}>
            <DeployableInput
              value={values.bank}
              placeholder="Bank"
              data={userStore.banks}
              itemPress={it => (values.bank = it)}
            />
            <Input
              value={values.email}
              placeholder="Email"
              onChangeText={handleChange('email')}
              keyboardType="email"
              error={errors.email}
            />
            <Input
              value={values.password}
              placeholder="Password"
              onChangeText={handleChange('password')}
              error={errors.password}
            />
            <Button style={styles.loginBtn} title="LOGIN" onPress={handleSubmit} />
          </View>
        </ScrollView>
      </Shell>
    );
  }
}
