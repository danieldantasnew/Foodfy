const url_API = `http://foodfyapi.local/json`;

export function TOKEN_POST(body) {
  return {
    url: url_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function USER_GET(token) {
  return {
    url: url_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer '+ token,
      }
    }
  }
}