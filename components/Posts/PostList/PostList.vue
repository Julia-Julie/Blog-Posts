<template>
  <section class="post-list">
      <post-preview
        v-for="(post, index) in posts"
        :key="index"
        v-bind="{...post, index}"
      />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview/PostPreview";

export default {
  name: 'PostList',
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          header: 'Post - 1',
          content: "Here should be the <b> first </b> content",
          author: 'Written by <b> Julia </b> ',
          thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },
        {
          header: 'Post - 2',
          content: "Here should be the <b> second </b> content",
          author: 'Written by <b> Ann </b> ',
          thumbnail: 'https://techlogistics.net/wp-content/uploads/2021/08/hi-tech-enterprise-smart-assistant.jpg'
        },
        {
          header: 'Post - 3',
          content: "Here should be the <b> third </b> content",
          author: 'Written by <b> Alan </b> ',
          thumbnail: 'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg'
        },
        {
          header: 'Post - 4',
          content: "Here should be the <b> fourth </b> content",
          author: 'Written by <b> Steve </b> ',
          thumbnail: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg'
        }
      ]
    }
  },
  mounted() {
    // this.posts.forEach((post, index) => {
    //   console.log({...post, index})
    //   console.log({post, index})
    //   console.log({post}, index)
    // })

    //Rest
    // console.log(this.sumNums(1, 2));

    //Spread
    // let different = [1, true, {a: 5}, [10, 20, 30]];
    // console.log('different', this.newArray(different));
  },
  methods: {
    sumNums(...args) {
      let sum = 0;
      args.forEach((el) => {
        sum += el;
      })
      return sum;
    },
    newArray(myArr) {
      return [0, ...myArr, 6]
    }
  },
}
</script>

<style lang="scss" scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 30px;
  border-radius: 10px;
  background-color: rgba(20, 20, 20, 0.9);

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 100%);
  }
}

</style>
