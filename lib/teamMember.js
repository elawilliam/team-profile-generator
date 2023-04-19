class teamMember {
    constructor(name, id, email, imgSrc) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.imgSrc = imgSrc;
        this.jobTitle = 'Team Member';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getImgSrc() {
        return this.imgSrc;
    }

    getRole() {
        return this.jobTitle;
    }
}

module.exports = teamMember;