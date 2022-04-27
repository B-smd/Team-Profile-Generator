const Manager = require('../lib/Manager');
const manager= new Manager('bambang', '222', 'djaja@iinet.net.au', '15');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('bambang');
    expect(manager.id).toBe('222');
    expect(manager.email).toBe('djaja@iinet.net.au');
    expect(manager.officeNumber).toBe('15');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('bambang');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('222');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('djaja@iinet.net.au');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('15');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
