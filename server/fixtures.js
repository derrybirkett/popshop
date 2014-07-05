if (Themes.find().count() === 0) {
      Themes.insert({
              title: 'Telescope',
                  author: 'Sacha Greif',
                      url: 'http://sachagreif.com/introducing-telescope/'
                        });

        Themes.insert({
                title: 'Meteor',
                    author: 'Tom Coleman',
                        url: 'http://meteor.com'
                          });

          Themes.insert({
                  title: 'Book',
                      author: 'Tom Coleman',
                          url: 'http://themeteorbook.com'
                            });
}
