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
            <View style={styles.inputsView}>
            <DeployableInput
              value={userStore.bank}
              placeholder="Bank"
              data={userStore.banks}
              itemPress={it => (userStore.bank = it)}
              image={require("../assets/bank.png")}
            />
            <Input
              value={userStore.email}
              placeholder="Email"
              onChangeText={it => (userStore.email = it)}
              keyboardType="email"
              image={require("../assets/email.png")}
            />
            <Input
              value={userStore.password}
              placeholder="Password"
              onChangeText={it => (userStore.password = it)}
              image={require("../assets/password.png")}
            />
            </View>
            <Button style={styles.loginBtn} title="LOGIN" onPress={this.inter.handleLogin} />
          </View>
        </ScrollView>
      </Shell>
    );
  }
}
