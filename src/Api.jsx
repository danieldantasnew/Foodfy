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
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+ token,
      }
    }
  }
}

export function USER_POST(formData) {
  return {
    url: url_API + '/api/user',
    options: {
      method: 'POST',
      body: formData
    }
  }
}

export function USER_PUT(body, token) {
  return {
    url: url_API + '/api/user',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:'Bearer '+ token
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

export function RECIPE_PUT(body, token, id) {
  return {
    url: url_API + `/api/recipe/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:'Bearer '+ token
      },
      body: JSON.stringify(body),
    }
  }
}

export function RECIPE_DELETE(id, token) {
  return {
    url: url_API + `/api/recipe/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization:'Bearer '+ token
      }
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

export function COMMENT_PUT(body, id, token) {
  //o id como parâmetro é o id da receita, no corpo se passa id do comentários, comentário e avaliação.
  return {
    url: url_API + `/api/comment/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:' Bearer '+ token
      },
      body: JSON.stringify(body)
    }
  }
}

export function COMMENT_DELETE(body, id, token) {
  //o id como parâmetro é o id da receita, no corpo se passa id do comentários, comentário e avaliação.
  return {
    url: url_API + `/api/comment/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:' Bearer '+ token
      },
      body: JSON.stringify(body)
    }
  }
}