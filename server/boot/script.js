module.exports = function(app) {
  var Reviewer = app.models.reviewer;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Team = app.models.Team;


  Reviewer.create([
      {username: 'JTD', email: 'john@johnthedesigner.com', password: 'password'}
  ], function(err, users) {
    if (err) throw err;

    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;
 
      // Make JTD an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;
      });
    });
  });
};