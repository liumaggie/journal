const authToken = 'EAACEdEose0cBAHbA22WgrpKWzTLJuRasSGKSffI3WOIxuNYowz6sufSbq0KXvSaGQs5ldMGttiJH368ls28lTjCEPrJe8RSZA3GHmeBKsbx2aQxRqdfN0LuHwwiKPprDOaVYjFeaO3l7PI8hoDaSQcBrmE4MgrXtCzcStRCxomFLl3bJc0H0LN8R6JZCYZD';

export const fetchAllFacebookPosts = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `https://graph.facebook.com/v2.9/journalsquaredjc/feed?oauth_token=${authToken}`
    })
  );
};

export const fetchSingleFacebookPost = (id) => {
  return(
    $.ajax({
      method: 'GET',
      url: `https://graph.facebook.com/v2.9/${id}?oauth_token=${authToken}`
    })
  );
};
