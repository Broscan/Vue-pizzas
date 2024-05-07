const { createApp } = Vue;

createApp({
  data() {
    return {
      pizzas: [],
    };
  },
  methods: {
    removePizza(pizzaId) {
      fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    },
    async addPizza() {
      const newPizza = {
        name: this.pizzaName,
        tastyness: this.tastyness,
      };

      // Skapa options för post

      const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPizza),
      };
      await fetch("http://localhost:3000/pizzas", postOptions);
    },
  },
  mounted() {
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((data) => (this.pizzas = data));
  },
}).mount("#app");
