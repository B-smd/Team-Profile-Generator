const Engineer = require('../lib/Engineer');
const engineer= new Engineer('bambang', '222', 'djaja@iinet.net.au', 'B-smd');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('bambang');
    expect(engineer.id).toBe('222');
    expect(engineer.email).toBe('djaja@iinet.net.au');
    expect(engineer.github).toBe('B-smd');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('bambang');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('222');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('djaja@iinet.net.au');
});


test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
