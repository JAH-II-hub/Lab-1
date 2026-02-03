const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function(name) {
    this.team.push(name);
};

console.log('Manager species:', manager.species);
console.log('Manager company:', manager.company);
console.log('Manager department:', manager.department);
console.log('Manager breathe:', manager.breathe());
console.log('Manager position:', manager.position);

manager.addTeamMember('Alice');
manager.addTeamMember('Bob');
console.log('Manager team:', manager.team);

console.log('Prototype chain:');
console.log('manager.__proto__ === employee:', manager.__proto__ === employee);
console.log('employee.__proto__ === person:', employee.__proto__ === person);
console.log('person.__proto__ === Object.prototype:', person.__proto__ === Object.prototype);