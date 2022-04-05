<template>
  <section class="post-list">
    <post-preview
      v-for="(post, index) in items"
      :key="index"
      v-bind="{...post, index}"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview/PostPreview";

export default {
  name: 'PostList',
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    PostPreview
  },
  data() {
    return {
      shownNum: 3
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
  computed: {
    shownList({posts}) {
      return posts.slice
    }
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
