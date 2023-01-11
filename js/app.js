const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "todo1", completed: false },
        { id: 2, text: "todo2", completed: false },
        { id: 3, text: "todo3", completed: false },
        { id: 4, text: "todo4", completed: false },
        { id: 5, text: "todo5", completed: false },
        { id: 6, text: "todo6", completed: false },
        { id: 7, text: "todo7", completed: false },
      ],
      search: "",
      hideItemCreator: true,
    };
  },
  methods: {
    addItem: function (e) {
      this.todoList.push({
        id: this.todoList.slice(-1)[0] ? this.todoList.slice(-1)[0].id + 1 : 1,
        text: e.target.value,
        completed: false,
      });
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },
  computed: {
    completedTasksCount : function(){
        return this.todoList.filter((i) => i.completed).length
    },
    UncompletedTasksCount : function(){
        return this.todoList.filter((i) => !i.completed).length
    }
  },
});
app.mount("#app");
