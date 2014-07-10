Router.configure({
    layoutTemplate: 'layout'

});

Router.map(function() {
    this.route('directory', {
        path: '/',
        data: function() { return Meteor.users.find();}
    });

    this.route('profile', {
        path: "/profile/:_id",
        data: function() { return Meteor.users.findOne(this.params._id);}
    });

    /* User account */
    this.route('account', {
        path: "/account",
        data: function() { return Meteor.users.findOne(Meteor.userId()); }
    });

    /* Themes */
    this.route('themes', {
        path: "/themes",
        data: function() { return Themes.find();}
    });


   

});

