Template.account.events({
    'submit form': function(e) {
        e.preventDefault();

        var accountUpdates = {
            name: $(e.target).find('[name=name]').val(),
            bio: $(e.target).find('[name=bio]').val()
        }

        Meteor.call('updateAccount', accountUpdates, function(error, id) {
            if(error) alert(error.reason)
        });
    }
});
