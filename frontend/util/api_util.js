const instagramData = require('../../app/assets/javascripts/instagram.json')

const authToken = 'EAACEdEose0cBAEKUgnbmzYABZC8bSQu0kbHjw5aC4rmyeHIo33HRAUCLxE9UebNARyZC7kJJxkqtZAe652jWzpgV19cyDCsYaFLu2svMwppgYW0CmH680uSdZAiMcvikJEXvv0zez1kR9zEEraZAinh0faG28QuIrXy70bY1XspJyKNZCfJVtcGanhD13hQlYZD';

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
