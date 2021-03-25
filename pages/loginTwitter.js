const { I } = inject();

module.exports = {
  fields: {
    user: 'session[username_or_email]',
    password: 'session[password]'
  },
  btn: {
    submit: { css: '[data-testid="LoginForm_Login_Button"]' }
  },

  fillForm(user, password) {
    I.fillField(this.fields.user, user);
    I.fillField(this.fields.password, password);
  },

  sendForm(){
    I.click(this.btn.submit);
  }
}
