<template>
  <div>
    <h2>Users</h2>
    <div class="users">
      <div class="container-fluid">
        <div class="row table-header">
          <div class="col-md-2">Name</div>
          <div class="col-md-4">Email</div>
          <div class="col-md-3">Phone</div>
        </div>
        <template v-for="(person, index) in people">
          <div class="row person-info" :key="index">
            <div class="col-md-2">{{person.name}}</div>
            <div class="col-md-4">{{person.email}}</div>
            <div class="col-md-3">{{person.phone}}</div>
            <div class="col-md-3 text-right"><button class="btn btn-outline-primary btn-sm">Items</button></div>
          </div>
          <template v-if="person.items">
            <div class="row">
              <div class="col-md-4 offset-md-8">{{person.items.length || "No"}} items on loan</div>
            </div>
            <div class="row item-info" v-for="(item, inx) in person.items" :key="inx">
              <div class="col-md-6 offset-md-3">{{item.title}}</div>
              <div class="col-md-3">by {{item.author}}</div>
            </div> 
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      people: [
        { name: 'Alice', 
        email: 'alice@gmail.com', 
        phone: '0412123456',
        items: []
        },
        {
          name: 'Bill', 
          email: 'bill@hotmail.com', 
          phone: '0412847222',
          items: [{
            title: "book1",
            author: "author1",
            isbn: "123"
          }]
        },
        { name: 'Carol', email: 'carol@gmail.com', phone: '0412384229' },
        { name: 'Nigel',
          email: 'shiuu@gmail.com', 
          phone: '0412788051',
          items: [{title: "book2", author: "a2"},
            {title: "book3", author: "a3"}
          ]
        }
      ]
    };
  },
};
</script>

<style scoped>
  h2 {
    text-align: center;
  }
  .users {
    margin: 30px 80px;
    font-size: 18px;
  }
  .table-header {
    font-weight: 600;
    padding: .75rem;
    vertical-align: top;
    border-top: 2px solid skyblue;
  }
  .person-info {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  a {
    color: palevioletred;
  }
</style>
