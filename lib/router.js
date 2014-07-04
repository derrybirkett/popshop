Router.configure({
    layoutTemplate: 'layout'    
});

Router.map(function() {
    this.route('profile', {
        path: "/profile/:_id",
        data: function() { return Meteor.user(this.params._id);}
    });
});
