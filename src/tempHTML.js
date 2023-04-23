// Creates the engineer profile //
const createTeam = (team) => {
    const createEngineer = (engineer) => `
    <div class="card col-4 me-3 mb-5 employee-card">
        <img src="${engineer.imgSrc}">
        <div class="card-header employee-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-wrench"></i>${engineer.jobTitle}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                </li>
                <li class="list-group-item">
                    GitHub:
                    <a href="https://github.com/${engineer.gitHubUsername}" target="_blank"
                        rel="noopener noreferrer">${engineer.gitHubUsername}</a>
                </li>
            </ul>
        </div>
    </div>
`;
    // Creates the manager profile //
    const createManager = (manager) => `
                <div class="card col-4 me-3 mb-5 employee-card">
                    <img src="${manager.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-people-roof"></i>${manager.jobTitle}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${manager.email}">${manager.email}</a>
                            </li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;

    // Create the intern profile //
    const createIntern = (intern) => `
                <div class="card col-4 me-3 mb-5 employee-card">
                    <img src="${intern.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${intern.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-wrench"></i>${intern.jobTitle}</h3>
                    </div>
                    <div class="card-body">
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">${intern.email}</a>
                    </li>
                    <li class="list-group-item">
                    <li class="list-group-item">Office number: ${intern.school}</li>
                    </li>
                </ul>
            </div>
        </div>
`;

    // Creating an array to then store the team data //
    const html = [];

    // Adds team members to the empty array for the HTML //
    html.push(...team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => createEngineer(engineer)));

    html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => createManager(manager)));

    html.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => createIntern(intern)));

    // Join all the HTML cards and return them together as one variable //
    return html.join('');
};

//HTML Head and Body 

const createMain = (team) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Role Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="team-profile-header col-12 mb-3 team-profile">
                <h1 class="team-profile-title text-center">Meet The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-mem-container col-12 d-flex flex-wrap justify-content-around">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
crossorigin="anonymous"></script>
</html>
`;

module.exports = createMain;