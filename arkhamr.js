if (Meteor.isClient) {
  FlowRouter.route('/',{
    action: function(params){
      BlazeLayout.render('appLayout');
    }
  });

  FlowRouter.route('/login',{
    action: function(params){
      BlazeLayout.render('loginLayout');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
