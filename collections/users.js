Meteor.methods({
    updateAccount: function(accountData) {
        var account = Meteor.users.update(
            Meteor.userId,
            {$set: {"profile":accountData}}
        )
        return account;
    }   
});
