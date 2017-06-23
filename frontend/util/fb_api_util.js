const authToken = 'EAACEdEose0cBAKvKnDsTzHDqkZC6W2NyUZAPjHx2MJ8SX4empowRHiUv5kvo4iuu64BXenL0oQGEfXXoNCvuVIG0MP7SP3ITvikBi0JWmbKncOPGxkyQkmYxgSXHoGZAEtArc9b60ROqW8CxQpQLQv1BMJPRkFAYks8CzDZAYJZBLXVuAVuyAzEKETvOILmwZD';

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
