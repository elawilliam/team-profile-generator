const teamMember = require('./teamMember');

class Intern extends teamMember {
    constructor(name, id, email, imgSrc, school) {
        super(name, id, email, imgSrc);
        this.school = school;
        this.jobTitle = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;