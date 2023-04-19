const teamMember = require('./teamMember');

class Manager extends teamMember {
    constructor(name, id, email, imgSrc, officeNumber) {
        super(name, id, email, imgSrc);
        this.officeNumber = officeNumber;
        this.jobTitle = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;