<template>
  <tr>
    <!-- <td>{{item.id}}</td> -->
    <td>{{item.employee_name}}</td>
    <td>{{item.employee_salary}}</td>
    <td>{{item.employee_age}}</td>
    <td>
      <button @click="deleteItem">delete</button>
      <button @click="editItem">Edit</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "Plain",
  props: {
    item: Object
  },
  methods: {
    deleteItem() {
      this.$http
        .delete(`http://dummy.restapiexample.com/api/v1/delete/${this.item.id}`)
        .then(response => {
          alert("list Deleted Successfully");
          console.log(response);
          this.$emit("reload");
        })
        .catch(error => {
          alert("Error Deleting list");
          console.log(error.response);
        });
    },
    editItem() {
      this.$router.push({ name: "edit-List", params: { id: this.item.id } });
    },
  }
};
</script>
<style scoped>
button{
    background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
}

</style>