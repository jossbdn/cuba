Template.backNewCustomer.events({

  'submit form': function(e, template){

    e.preventDefault();

    var name = $('input[name="name"]').val();
    var lastName = $('input[name="lastName"]').val();
    var firstName = $('input[name="firstName"]').val();
    var email = $('input[name="email"]').val();
    var summary = $('input[name="summary"]').val();
    var phoneNumber = $('input[name="phoneNumber"]').val();
    var street = $('input[name="street"]').val();
    var zipCode = $('input[name="zipCode"]').val();
    var city = $('input[name="city"]').val();
    var country = $('input[name="country"]').val();

    if(name && lastName && firstName && email && summary && phoneNumber && street && zipCode && city && country){


      var customer = Customers.findOne({ name: name });

      if(customer){

        CUBA.notification.launch('Le client ' + name + ' existe déjà', 'error');

      }else {

        Customers.insert({
          name: name,
          email: email,
          lastName: lastName,
          firstName: firstName,
          summary: summary,
          phoneNumber: phoneNumber,
          address: {
            street: street,
            zipCode: zipCode,
            city: city,
            country: country
          },
          userId: Meteor.userId(),
          createdAt: new Date()
        });

        CUBA.notification.launch('Le client ' + name + ' a été créé avec succès', 'success');

      }

    }else {

      CUBA.notification.launch('Il faut remplir tous les champs', 'error');

    }



  }

});
