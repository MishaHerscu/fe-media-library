var faker = require('faker');

module.exports = {
  seed: function(database) {
    var numberOfArtists = 100;
    var albumsPerArtist = 20;
    var commentsPerAlbum = 10;
    var cities = ['Chicago', 'New York', 'Los Angeles', 'Philadelphia', 'Denver', 'Miami', 'San Francisco', 'Seattle'];
    var cityObjectArray = [];
    var city_id = 1;

    var artists = [];
    var albums = [];
    var nowDate = new Date();

    function nextCity() {
      city_id = city_id >= cities.length ? 1 : city_id + 1;
      return city_id;
    }

    function checkArtist(city, artist) {
      if(artist.city_id === city.id) {
        city.artist_ids.push(artist.id);
      }
    }

    cities.forEach(function(city) {
      var thisCity = {
        name: city,
        artist_ids: []
      };
      cityObjectArray.push(database.save('city', thisCity));
    });

    for(var i = 0; i < numberOfArtists; i++) {
      var artist = {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        album_ids: [],
        city_id: nextCity(),
        founding_year: faker.date.past(100).getFullYear()
      };

      artists.push(database.save('artist', artist));
    }

    artists.forEach(function(artist) {
      for (var i = 0; i < albumsPerArtist; i++) {
        var album = {
          artist_id: artist.id,
          name: faker.company.catchPhrase(),
          year: faker.date.between(artist.founding_year, nowDate).getFullYear(),
          total_sold: faker.random.number({min: 1000, max: 99999999}),
          comment_ids: []
        };

        album = database.save('album', album);
        artist.album_ids.push(album.id);
        albums.push(album);
      }
    });

    albums.forEach(function(album) {
      for (var i = 0; i < commentsPerAlbum; i++) {
        var comment = {
          album_id: album.id,
          author: faker.name.firstName() + ' ' + faker.name.lastName(),
          message: faker.lorem.paragraph()
        };

        comment = database.save('comment', comment);
        album.comment_ids.push(comment.id);
      }
    });

    cityObjectArray.forEach(function(city) {
      artists.forEach(function(artist) {
        checkArtist(city, artist);
      });
    });
  },
};
