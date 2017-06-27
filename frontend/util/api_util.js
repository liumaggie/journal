const instagramData = require('../../app/assets/javascripts/instagram.json')

const authToken = 'EAABrLZCqb5ocBAMPjP0ZC6CTkTiJCkjCjULY0ORJfbgJSmnfxj8bNO8ZA17N3Lhv5DolTsLl1ZAGK7l93kROmbcQZCX8GXTvvHNa5thcqYJHtlUZB2ZAsPpCYRIWOTg8O2lz5nLQpQ8QoZAlmaUocmZA3O3ZANU6eW0RQZD';

export const fetchAllFacebookPosts = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `https://graph.facebook.com/v2.9/journalsquaredjc/feed?oauth_token=${authToken}`
    })
  );
};

export const fetchAllInstagramPosts = () => {
  return instagramData.items;
};


// $.ajax({
//     url: "https://api.instagram.com/v1/users/2318793052/?access_token=30117210.2ccad70.01e429ee53e94c68a4ddba175d099179&callback=?",
//     dataType: "jsonp",
//     contentType: "application/json; charset=utf-8",
//     success: function( response ) {
//         console.log( response );
//     }
// });
