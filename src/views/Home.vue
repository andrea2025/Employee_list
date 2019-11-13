<template>
  <div class="home">
    <h1>Employee's List</h1>
    <div>
      <table>
        <tr class="table-success">
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Option</th>
        </tr>
        <Plain v-for="list in x" 
        :key="list.id" 
        :item="list" 
        @reload="refresh()" />
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Plain from "@/components/Plain.vue";

export default {
  name: "home",
  components: {
    Plain
  },
  data() {
    return {
      x: [],
      y: "",
      z: ""
    };
  },
  methods: {
    refresh() {
      this.$http
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          this.x = response.data;
        })
        .catch(error => {
          alert(error.response);
        });
    }
  },
  mounted() {
    this.refresh();
  }
};
</script>
<style scoped>
table {
  font-family: sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;

}


th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 13px;
  background: rgb(30, 117, 85);
  font-size: 25px;
  color:white;
}

tr:nth-child(even) {
  background-color: rgba(189, 185, 186, 0.678);
  color: #000000;
}
</style>