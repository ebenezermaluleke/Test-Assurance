Feature('Login');

Scenario('Successful login', ({ I }) => {
    I.amOnPage('/main');
    I.fillField("//input[@id='mat-input-0']", "ebenipho1@gmail.com");
    I.fillField("//input[@id='mat-input-1']", "Ebenezer@maluleke97");
    I.click("Login");
    I.see("Job Posts");
    I.wait(5);
});

Scenario('Unsuccessful log in', ({ I }) => {
    I.amOnPage('/main');
    I.fillField("//input[@id='mat-input-0']", "admin");
    I.fillField("//input[@id='mat-input-1']", "admin123");
    I.click("Login");
    I.wait(5);
});