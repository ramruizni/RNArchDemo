import BaseInteractor from './base/BaseInteractor';
import * as Yup from 'yup';
import {getYupField} from '../utils/UI';

export default class extends BaseInteractor {
  constructor(screen) {
    super(screen);
  }

  get validationSchema() {
    return Yup.object().shape({
      idNumber: getYupField('^[\\w]{1,12}$', true),
      email: Yup.string()
        .email('Field not correct')
        .required('Field required'),
      password: getYupField('^[\\w]{4}$', 'Field not correct').required('Field required')
    });
  }
}
