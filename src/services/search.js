import scraper from 'google-search-scraper';

const getShelterSite = (shelterName) => 
  new Promise(async(resolve, reject) => {
    const options = {
      query: shelterName,
      limit: 1
    };
    scraper.search(options, function(err, url) {
      if(err) reject(err);
      resolve(url);
    });

  });

export default {getShelterSite}