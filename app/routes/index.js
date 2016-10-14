import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({

      years: this.get('store').findAll('album')
      .then((albums) => {
        let years = [];
        let uniqueYears = [];
        let yearsObjects = [];

        albums.forEach((album) => {
          years.push(album.get('year'));
        });
        years = years.sort((a,b) => {
          return a - b;
        });

        years.forEach((year) => {
          if(uniqueYears.indexOf(year) === -1) {
            uniqueYears.push(year);
          }
        });

        uniqueYears.forEach((uniqueYear) => {
          let count = 0;
          years.forEach((thisYear) => {
            if(thisYear === uniqueYear) {
              count += 1;
            }
          });
          let yearObject = {
            year: uniqueYear,
            count: count
          };
          yearsObjects.push(yearObject);
        });
        return yearsObjects;
      }),

      artists: this.get('store').findAll('artist')
      .then((artists) => {
        artists.forEach((artist) => {
          artist.set('albumsSold', 0);
          artist.get('album_ids')
          .then((artistAlbums) => {
            artistAlbums.forEach((album) => {
              artist.set('albumsSold', artist.get('albumsSold') + album.get('total_sold'));
            });
          });
        });
        return artists;
      })
      .then((artists) => {
        return artists.toArray().sort((artistA, artistB) => {
          return artistA.get('albumsSold') - artistB.get('albumsSold');
        }).reverse().slice(0,5);
      })
    });
  },
});
