<script setup>
import { reactive } from 'vue';

let tasks = reactive([
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' },
]);
const addTask = () => {
  const newTask = { id: Math.random(), name: `Task ${tasks.value.length + 1}` };
  tasks.value.push(newTask);
};
const removeTask = (id) => {
  tasks = tasks.value.filter((task) => task.id !== id);
};
</script>
<template>
  <div class="wrapper">
    <h1>Task List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="text" v-model="task.name" />
        <button @click="removeTask(task.id)" data-test="button-remove">
          X
        </button>
      </li>
    </ul>
    <button @click="addTask" data-test="button-add">Add Task</button>
  </div>
</template>
