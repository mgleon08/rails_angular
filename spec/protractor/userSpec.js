describe('User CRUD', function() {
  const firstName = element(by.model('user.first_name'));
  const lastName  = element(by.model('user.last_name'));
  const age       = element(by.model('user.age'));
  const gender    = element(by.model('user.gender'));
  const country   = element(by.model('user.address.country'));
  const address1  = element(by.model('user.address.address_1'));
  const address2  = element(by.model('user.address.address_2'));
  const userList  = element.all(by.repeater('user in users'));
  const submitBtn = element(by.buttonText('Submit Form'));

  beforeAll(() => browser.get('http://localhost:3000/users'));

  it('Create user', function() {
    let newUserBtn  = element(by.css('[ui-sref="users_new"]'));
    let expectCount = userList.count().then(count => expectCount = count + 1);

    // redirect to new page
    newUserBtn.click();

    // filled user form
    firstName.sendKeys('leon');
    lastName.sendKeys('ji');
    age.sendKeys(1);
    gender.sendKeys('male');
    country.sendKeys('Taiwan');
    address1.sendKeys('foo');
    address2.sendKeys('bar');

    // create user
    submitBtn.click();
    browser.sleep(1 * 500)

    expect(userList.count()).toEqual(expectCount);
  });

  it('Update user', function() {
    let EC = protractor.ExpectedConditions;
    let lastUser = userList.last().all(by.tagName('td'));
    let editBtn = userList.last().element(by.buttonText('Edit User'));

    editBtn.click();

    // update user firstName & lastName
    firstName.clear().sendKeys('foo');
    lastName.clear().sendKeys('bar');
    age.clear().sendKeys(18);
    gender.clear().sendKeys('others');

    // update user
    submitBtn.click();
    browser.wait(EC.alertIsPresent(), 3000);

    // expected alert
    let alert = browser.switchTo().alert()
    alert.accept();

    expect(alert.getText()).toEqual('update success');
    expect(lastUser.get(0).getText()).toEqual('foo');
    expect(lastUser.get(1).getText()).toEqual('bar');
    expect(lastUser.get(2).getText()).toEqual('18');
    expect(lastUser.get(3).getText()).toEqual('others');
  });

  it('Delete user', function() {
    let deleteBtn = userList.last().element(by.buttonText('Delete User'));
    let expectCount  = userList.count().then(count => expectCount = count - 1);

    // delete User
    deleteBtn.click()
    browser.sleep(1 * 500)

    expect(userList.count()).toEqual(expectCount)
  });
});
