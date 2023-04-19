const teamMember = require('./teamMember');

class Engineer extends teamMember {
    constructor(name, id, email, imgSrc, gitHubUsername) {
        super(name, id, email, imgSrc);
        this.gitHubUsername = gitHubUsername;
        this.jobTitle = 'Engineer';
    }

    getGitHubUsername() {
        return this.gitHubUsername;
    }
}
module.exports = Engineer;