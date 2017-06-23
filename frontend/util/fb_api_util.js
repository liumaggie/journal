const authToken = 'EAACEdEose0cBACNDWCZBTrn5lIdxpgv5AC3drg1J2aZAmCcjoJvZCL6uyY1DGARrMk8hwViEkHMB6OmWkRdHgZCK0iJJoZArUYHI83BZCyPCzNcqXiyKnFIDbxptthvfP7eaTGNMomzYZAxTZA4XZBV4OxhZClzOuHh1kinfIQfuHtLsND50nAOSQPkNpfarKNgCYZD';

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
