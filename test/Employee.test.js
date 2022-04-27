const Employee = require("../lib/Employee");
const employee = new Employee('bambang', '222', 'djaja@iinet.net.au');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('bambang');
    expect(employee.id).toBe('222');
    expect(employee.email).toBe('djaja@iinet.net.au');
});

test('test if we can get the name from the getNama() method',() => {
    expect(employee.getName()).toBe('bambang');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('222');

});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('djaja@iinet.net.au');
});
