// import axios from 'axios'
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

export const state = () => ({
  tweets: {},
  token: '',
  status: '',
  username: '',
})

export const mutations = {
  tweetMutation(state, data) {
    state.tweets = data;
  },
  AUTH_SUCCESS(state, data){
    state.status = 'success';
    state.token = data
  },
  AUTH_LOGOUT(state){
    state.token = ''
  },
  AUTH_ERROR(state) {
    state.status = 'error'
    state.token = ''
  },
  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  INIT_AUTH(state, data){
    state.token = data.token
    state.username = data.username
  },
  AUTH_USERNAME(state, data){
    state.username = data;
  }

}

export const actions = {
  getTweets(context) {
    this.$axios.get('tweets/').then((res) => {
      context.commit('tweetMutation', res.data)
    }).catch(err => console.log(err))
  },

  inIt(context){
    const userToken = localStorage.getItem('user-token')
    const userName = localStorage.getItem('username')
    context.commit('INIT_AUTH',{token: userToken, username: userName })
  },

  postTweet(context, data) {
    // console.log(data)
    this.$axios.post('tweets/', data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `token ${context.state.token}`
      }
    }).then(res => {
      console.log(res)
      context.dispatch('getTweets')
    }).catch(
      err => console.log(err)
    )
  },

  registerUser(context, data) {
    this.$axios.post('users/register/', data).then(res => console.log(res)).catch(
      err => console.log(err)
    )
  },

  userLogin(context, data) {
    this.$axios.post('token/', data,).then((res) => {
      const token = res.data.token
      localStorage.setItem('user-token', token)
      context.commit('AUTH_SUCCESS', token)
      // console.log(JSON.parse(res.config.data).username)
      localStorage.setItem('username', JSON.parse(res.config.data).username)
      context.commit('AUTH_USERNAME', JSON.parse(res.config.data).username)
      this.$router.push('/')
    }).catch((err) => {

      localStorage.removeItem('username')
      localStorage.removeItem('user-token')
      context.commit('AUTH_ERROR')
    })

  },

  userLogout(context){

    localStorage.removeItem('user-token')
    localStorage.removeItem('username')
    context.commit('AUTH_LOGOUT')

  }

}

export const getters = {

  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

