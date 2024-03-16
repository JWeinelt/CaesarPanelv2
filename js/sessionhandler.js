var token = ""; // NEEDED

const authURL = "http://45.137.68.46:2812/api/v2/auth/"

const username = 'julian';
const password = 'Jogi.2011';

const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

const requestOptions = {
  method: "POST",
  headers: {
    Authorization: "Basic anVsaWFuOkpvZ2kuMjAxMQ=="
  }
}

fetch(authURL, requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
