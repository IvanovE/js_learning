class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async getPosts() {
    try {
      const request = new Request(`${this.url}/posts`, {
        method: 'GET'
      })
      return useRequest(request)
    } catch (error) {
      console.log(error)
      alert('Something went wrong with the server')
    }
  }

  async createPost(post) {
    try {
      const request = new Request(`${this.url}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return useRequest(request)
    } catch (error) {
      console.log(error)
      alert('Something went wrong with the server')
    }
  }

  async toggleFavourite(id, favouriteState) {
    const request = new Request(`${this.url}/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({favourite: favouriteState}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return useRequest(request)
  }
}

async function useRequest(request) {
  const response = await fetch(request)
  return await response.json()
}

export const apiService = new ApiService('http://localhost:3000')
