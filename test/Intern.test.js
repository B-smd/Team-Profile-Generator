const Intern = require("../lib/Intern");
const intern = new Intern('bambang', '222', 'djaja@iinet.net.au', 'UWA');

test('test if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('bambang');
    expect(intern.id).toBe('222');
    expect(intern.email).toBe('djaja@iinet.net.au');
    expect(intern.school).toBe('UWA');

});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('bambang');
});
test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('222');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('djaja@iinet.net.au');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getSchool()).toBe('UWA');
});
test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
