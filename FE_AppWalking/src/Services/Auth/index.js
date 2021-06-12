import api from '../index';

export const Authentization = {
  Login: ({username, password}) => {
    return api.call().post('/user/signin', {
      email: username,
      password: password,
    });
  },
  Register: ({
    email,
        firstname,
        lastname,
        gender,
        birthday,
        phone,
        address,
        password,
  }) => {
    return api.call().post('/user/signup', {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      birthday: birthday,
      gender: gender,
      phone: phone,
      address_name: address,
      ward: 26827,
      district: 123,
      province: 49,
    });
  },
};
