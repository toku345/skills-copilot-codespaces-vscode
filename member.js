function skillsMember {
    var skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB',
        'Bootstrap',
        'jQuery',
        'Express',
        'MySQL',
        'Handlebars',
        'Sequelize'
    ];

    var skillsList = $('#skills-list');

    for (var i = 0; i < skills.length; i++) {
        var skill = $('<li>').text(skills[i]);
        skillsList.append(skill);
    }
}