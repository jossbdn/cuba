import PublishRelations from 'meteor/cottz:publish-relations';

// GET LIST CUSTOMERS

Meteor.publish('getListCustomers', function(userId){

  return Customers.find({ userId: userId }, {
    fields: {lastName: 1, surName: 1}
  });

});

// GET ONE CUSTOMER

Meteor.publish('getCustomer', function(customerId){

  return Customers.find({ _id: customerId });

});


// GET ONE PROJECT

Meteor.publish('getProject', function(projectId){

  return Projects.find({ _id: projectId });

});

// GET PROJECT & CUSTOMER

Meteor.publish('getProjectCustomer', function(projectId){

  var project = Projects.findOne({ _id: projectId });

  return Customers.findOne({
    _id: { $in: project.customerId }
  });

});

// GET LIST PROJECTS

Meteor.publish('getListProjects', function(userId){

  return Projects.find({ userId: userId });

});
