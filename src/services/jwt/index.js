import apiClient from 'services/axios'
import store from 'store'

export async function login(email, inputPassword) {
  console.log('login')
  return apiClient
    .post('/auth/local', {
      identifier: email,
      password: inputPassword,
    })
    .then(response => {
      if (response) {
        const { jwt } = response.data
        // console.log("jwt", jwt)
        if (jwt) {
          store.set('accessToken', jwt)
        }
        return {
          id: response?.data.user.id,
          email: response.data.user.email,
          name: response?.data.user.username,
          avatar: '',
          role: response?.data.user.role.type,
          jwt: response.data.jwt,
        }
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function register(inputemail, inputpassword, inputname) {
  return apiClient
    .post('/auth/local/register', {
      username: inputname,
      email: inputemail,
      password: inputpassword,
    })
    .then(response => {
      if (response) {
        const { jwt } = response.data
        if (jwt) {
          store.set('accessToken', jwt)
        }
        return {}
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function currentAccount() {
  // console.log(`currentAccount ${JSON.stringify(store.get('accessToken'))}`)

  // if(!JSON.stringify(store.get('accessToken'))){
  return apiClient
    .get('/users/me')
    .then(response => {
      if (response) {
        const { accessToken } = response.data

        // console.log("currentAccount", response.data)
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return {
          id: response?.data.id,
          email: response.data.email,
          name: response?.data.username,
          avatar: '',
          role: response?.data.role.type,
          jwt: store.get('accessToken'),
        }
      }
      return false
    })
    .catch(err => console.log(err))
  // }
  // return false
}

export async function logout() {
  return apiClient
    .get('/auth/logout')
    .then(() => {
      store.remove('accessToken')
      return true
    })
    .catch(err => console.log(err))
}
