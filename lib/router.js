Router.configure({
    layoutTemplate: 'layout'

});

Router.map(function() {
    this.route('list', {
        path: '/',
        data: function() { return Meteor.users.find();}
    });
    this.route('profile', {
        path: "/profile/:_id",
        data: function() { return Meteor.users.findOne(this.params._id);}
    });
});

