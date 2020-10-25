<template>
  <div>
    <h3>Catalogue</h3>
    <div class="cat">
      <div class="container">
        <div class="row table-header">
          <div class="col-md-5">Title</div>
          <div class="col-md-4">Author</div>
          <div class="col-md-3">ISBN</div>
        </div>
        <div class="row row-info" v-for="(book, index) in books" :key="index">
          <div class="col-md-5">{{book.title}}</div>
          <div class="col-md-4">{{book.author}}</div>
          <div class="col-md-3">{{book.isbn}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Books',
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      axios.get('/api/books')
        .then((result) => {
          this.books = result.data;
        })
        .catch(console.error);
    },
  },
};
</script>

<style scoped>
  h3 {
    text-align: center;
  }
  .cat {
    margin: 30px 80px;
    font-size: 18px;
    border-bottom: 2px solid skyblue;
  }
  .table-header {
    font-weight: 550;
    padding: 12px;
    vertical-align: top;
    border-top: 2px solid skyblue;
  }
  .row-info {
    padding: 12px;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
</style>
