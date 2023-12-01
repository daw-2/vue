import axios from 'axios';
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, todos: [] }),
  getters: {
    /* completedTodos() {
      console.log(this.todos);
    }, */
    completedTodos: (state) => state.todos.filter(t => t.done).length,
  },
  actions: {
    increment(value) {
      this.count += value;
    },
    fetchTodos() {
      axios.get('http://localhost:3000/todos').then(response => {
        this.count = response.data.length;
        this.todos = response.data;
      });
    }
  }
});

export const useCounterStore2 = defineStore('counter2', () => {
  const count = ref(0) // state
  const doubleCount = computed(() => count.value * 2) // getters
  function increment() { // actions
    count.value++
  }

  return { count, doubleCount, increment }
})
