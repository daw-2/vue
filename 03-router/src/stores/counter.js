import axios from 'axios';
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, todos: [] }),
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
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
