export default {
  isId: (id) => {
    const regEx = /^[a-z]+[a-z0-9]{5,19}$/g;
    return regEx.test(id);
  },
  isPassword: (password) => {
    const regEx = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    return regEx.test(password);
  },
  isNickname: (nickname) => {
    const regEx = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
    return regEx.test(nickname);
  },
};
