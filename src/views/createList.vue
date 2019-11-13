<template>
  <div class="about">
    <h1>Add to list</h1>
    <div class="form">
      <form @submit.prevent="submitName">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="e.g kofo" v-model="addList.employee_name">
        </div>
        <div>
          <label for="type">salary</label>
          <input  name="number" v-model="addList.employee_salary" >
        
        </div>
        <div>
          <label for="age">Age</label>
          <input type="number" name="age" placeholder="1" v-model="addList.employee_age">
        </div>
        <button class="form_button" type="submit">
          Submit
        </button>
      </form>
  </div>

  </div>
</template>
<script>
export default {
  name: 'createList',
  data() {
    return {
      addList: {
        employee_name: '',
        employee_salary: '',
        employee_age: ''
      }
    }
  },
  methods: {
    submitName() {
      this.$http.post('http://dummy.restapiexample.com/api/v1/create', this.addList)
        .then(response => {
          this.addList = {
             employee_name: '',
            employee_salary: '',
             employee_age: ''
          }
          
          alert(`Successfully added item with id ${response.data.id}`)
        })
        .catch(error => {
          alert(error.response)
        })
    }
  }
}
</script>
<style scoped>
form{
  display: block;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 10px;
  border: 1px solid rgb(226, 147, 43);
  box-shadow: 2px 4px 10px rgba(137, 43, 226, 0.2);
}
input{
  width: 80%;
  font-size: 18px;
  padding: 1rem;
  border-radius: 10px;
  margin: 8px 0;
  box-sizing: border-box;
   background-color: rgb(119, 160, 145);
  color: black;
}
input:focus{
background-color:white;    

}
label{
  display: block;
  font-size: 20px;
  font-weight: bolder;
}
button{
    background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 40px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
}
</style>