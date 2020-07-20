export const state = () => ({
  tweets: {}
})

export const mutations = {
  tweetMutation(state, data){
    state.tweets = data;
  }
}

export const actions = {
  getTweets(context){
    this.$axios.get('tweets/').then((res) => {context.commit('tweetMutation', res.data)})


  },
}

export const getters = {}

