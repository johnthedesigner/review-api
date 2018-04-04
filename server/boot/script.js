module.exports = function(app) {
  // var Reviewer = app.models.reviewer;
  // var Role = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;
  // var Team = app.models.Team;
  //
  // Reviewer.findOrCreate({
  //   where: {
  //     username: 'JTD'
  //   }
  // },
  // [
  //     {
  //       username: 'JTD',
  //       email: 'john@johnthedesigner.com',
  //       password: 'password'
  //     }
  // ], function(err, reviewer) {
  //   if (err) throw err;
  //   // Create the admin role
  //   Role.create({
  //     name: 'admin'
  //   }, function(err, role) {
  //     if (err) throw err;
  //     // Make JTD an admin
  //     role.principals.create({
  //       principalType: RoleMapping.USER,
  //       principalId: reviewer.id
  //     }, function(err, principal) {
  //       if (err) throw err;
  //     });
  //   });
  // });
};
