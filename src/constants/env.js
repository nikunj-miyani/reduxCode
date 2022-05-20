const isLive = false;

let api_base_uri = 'https://gorest.co.in/public/v2';

if (isLive) {
  api_base_uri = 'https://gorest.co.in/public/v2';
}

export default {
  isLive,
  api_base_uri,
};
