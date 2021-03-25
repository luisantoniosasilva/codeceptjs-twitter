const { I, loginTwitterPage } = inject();

Given('I access homepage', () => {
  I.amOnPage('/');
})

Given('I enter my access credentials', (table) => {
  for (const id in table.rows){
    if(id<1){
      continue;
    }

    const cells = table.rows[id].cells;

    const user = cells[0].value;
    const password = cells[1].value;

    I.click({ css: '[data-testid="loginButton"]' });
    loginTwitterPage.fillForm(user, password);
    loginTwitterPage.sendForm();
  }
});

Then('I see {string}', (seeText) => {
  I.see(seeText);
})
