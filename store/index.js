export const state = () => ({
  user: {
    is_student: true,
    avatar: null
  },
  posts: [
    {
      header: 'Post - 1',
      content: "Here should be the <b> first </b> content",
      author: 'Written by <b> Julia </b> ',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      feedbacks: 19
    },
    {
      header: 'Post - 2',
      content: "Here should be the <b> second </b> content",
      author: 'Written by <b> Ann </b> ',
      thumbnail: 'https://techlogistics.net/wp-content/uploads/2021/08/hi-tech-enterprise-smart-assistant.jpg',
      feedbacks: 11
    },
    {
      header: 'Post - 3',
      content: "Here should be the <b> third </b> content",
      author: 'Written by <b> Orest </b> ',
      thumbnail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg',
      feedbacks: 5
    },
    {
      header: 'Post - 4',
      content: "Here should be the <b> fourth </b> content",
      author: 'Written by <b> Steve </b> ',
      thumbnail: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg',
      feedbacks: 10
    },
    {
      header: 'Post - 5',
      content: "Here should be the <b> fourth </b> content",
      author: 'Written by <b> Brian </b> ',
      thumbnail: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg',
      feedbacks: 1
    },
    {
      header: 'Post - 6',
      content: "Here should be the <b> fourth </b> content",
      author: 'Written by <b> Eka </b> ',
      thumbnail: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg',
      feedbacks: 3
    }
  ]
})

//sync SECOND
//methods
export const mutations = {
  mutateAddPosts(state, payload) {
    state.posts.push(payload)
  },
  increaseFeedbackNumMutations(state, payload){
    state.posts.map((post) => {
      return post.feedbacks += payload
    })
  }
}

//async - FIRST
//methods
export const actions = {
  actionAddPosts(context, payload) {
    //Commit for mutations
    console.log(context);
    context.commit('mutateAddPosts', payload)
  },

  increaseFeedbackNum(ctx, payload) {
    ctx.commit('increaseFeedbackNumMutations', payload)
  }
}

//computed
// getters don`t change state
export const getters = {
  formattedPosts(state) {
    return state.posts.map(({header, content, author, thumbnail, feedbacks}) => {
      return {
        header: `** ${header} **`,
        content,
        author: `-- ${author} --`,
        thumbnail,
        feedbacks
      }
    })
  }
}
