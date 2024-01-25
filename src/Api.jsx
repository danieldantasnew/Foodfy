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

export function USER_POST(body) {
  return {
    url: url_API + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function RECIPES_GET({page, total, user}) {
  return {
    url: `${url_API}/api/recipe/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }
}

export function RECIPE_POST(formData, token) {
  return {
    url: url_API + '/api/recipe',
    options: {
      method: 'POST',
      headers: {
        Authorization:'Bearer '+ token
      },
      body: formData
    }
  }
}

export function PASSWORD_LOST(body) {
  return {
    url: url_API + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PASSWORD_RESET(body) {
  return {
    url: url_API + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function COMMENT_POST(body, id, token) {
  return {
    url: url_API + `/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:' Bearer '+ token
      },
      body: JSON.stringify(body)
    }
  }
}