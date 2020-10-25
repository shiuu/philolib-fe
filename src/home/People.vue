<template>
  <div>
    <h3>Users</h3>
    <div class="users">
      <div class="container">
        <div class="row table-header">
          <div class="col-md-4">Name</div>
          <div class="col-md-4">Email</div>
          <div class="col-md-2">Phone</div>
        </div>
        <template v-for="(person, index) in people">
          <div class="row person-info" :key="index">
            <div class="col-md-4">{{person.firstName}} {{person.lastName}}</div>
            <div class="col-md-4">{{person.email}}</div>
            <div class="col-md-2">{{person.phone}}</div>
            <div class="col-md-2 text-right items-btn">
              <button class="btn btn-outline-primary btn-sm" @click="fetchItemsOnLoan(person.id)">
                Items
              </button>
            </div>
          </div>
          <template v-if="person.items">
            <div class="row" :key="'items'+index">
              <div class="col-md-4 offset-md-8 items text-right">
                {{person.items.length || "No"}} items on loan
              </div>
            </div>
            <div class="row" v-for="(item, inx) in person.items" :key="'item'+inx+'for'+person.id">
              <div class="col-md-7 offset-md-2 item-info">{{item.title}}</div>
              <div class="col-md-3 item-info">
                <span style="font-style:italic;">by</span> {{item.author}}
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'People',
  data() {
    return {
      people: [],
    };
  },
  created() {
    this.fetchPeople();
  },
  methods: {
    fetchPeople() {
      axios.get('/api/people')
        .then((result) => {
          this.people = result.data;
        })
        .catch(console.error);
    },
    fetchItemsOnLoan(personId) {
      axios.get(`/api/books-on-loan/${personId}`)
        .then((result) => {
          console.log(result.data);
          const newPeople = this.people.map((p) => {
            if (p.id === personId) {
              return {
                ...p,
                items: result.data,
              };
            }
            return { ...p };
          });
          this.people = newPeople;
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
  .users {
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
  .person-info {
    padding: 12px;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  .items {
    font-size: 17px;
  }
  .item-info {
    font-size: 14px;
    border-top: 1px solid #dee2e6;
  }
  .items-btn {
    padding-right: 0;
  }
</style>
