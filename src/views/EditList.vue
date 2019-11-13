<template>
    <div>
    <h3>Edit List</h3>
     <div class="form-group">
         <label for="name">Employee Name:</label>
         <input type="text"  v-model="parte.employee_name">
     </div>
     
    <div class="form-group">
        <label for="salary">Employee Salary:</label>
        <input type="number" v-model="parte.employee_salary" >
    </div>
    <div>
        <label for="age">Employee Age:</label>
        <input type="number" v-model="parte.employee_age">
     </div>   
      <button @click="upgrade" class="btn btn-primary">submit</button>
    
    </div>
</template>
<script>
export default {
    name:'EditList',
    data(){
        return{
            parte:{
                employee_name:'',
                 employee_salary:'',
                 employee_age:''
            },
            
            
        }
    },
    mounted(){
        this.$http.get(`http://dummy.restapiexample.com/api/v1/employee/${this.$route.params.id}`).
        then (response => {
            this.parte = response.data
        })
    },
    methods:{
        upgrade(){
            this.$http.put(`http://dummy.restapiexample.com/api/v1/update/${this.$route.params.id}`).
            then (response => {
                
                 alert('Successfully updated')
                 return response
        })
        .catch(error => {
          alert(error.response)
        })

        }
    }

}
</script>
<style  scoped>
form{
    display: block;
}
input{
    width: 80%;
  padding: 1rem;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: rgb(119, 160, 145);
  color: black;
  border-radius: 20px;
}
input:focus{
background-color:white;    

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
label{
    font-size: 20px;
    font-weight: bold;
    display: block;
}
h3{
    font-size:40px;
    font-weight: bolder;

}
</style>