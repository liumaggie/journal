const instagramData = require('../../app/assets/javascripts/instagram.json')

const authToken = 'EAACEdEose0cBAC9mF5yOR23ONUm8DUZAD91FsurmfwatoH1mjizea6hsBTkKlgi0t1MROIk7xwEgxWiZBjUG5U8u0ZCakBj8aWsYfdg1jWGvn0CLW6rqIr7PoaX0m0xLKCiXMUBLa5ZA3WgnNFH1VbKeNYc9Wv1rsSZCnTPXkMwU2g5b9tXVVcfJRvUpZAZASQZD';

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

//
// export const fetchSingleFacebookPost = (id) => {
//   return(
//     $.ajax({
//       method: 'GET',
//       url: `https://graph.facebook.com/v2.9/${id}?oauth_token=${authToken}`
//     })
//   );
// };
//
// $.ajax({
//   method: 'GET',
//   url: `https://www.instagram.com/journalsquared/media&callback=?`,
//   dataType: "jsonp",
//   contentType: "application/json; charset=utf-8",
//   jsonpCallback: "callback",
//   success: function (data) {
//             $('div').html(JSON.stringify(data));
//         }
// });
//
// $.ajax({
//     url: "https://api.instagram.com/v1/users/2318793052/?access_token=30117210.2ccad70.01e429ee53e94c68a4ddba175d099179&callback=?",
//     dataType: "jsonp",
//     contentType: "application/json; charset=utf-8",
//     success: function( response ) {
//         console.log( response );
//     }
// });
