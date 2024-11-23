const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [], // Almacenará los datos de la API
    };
  },
  methods: {
    async fetchItems() {
      try {
        // Consumir la API
        const response = await fetch("https://www.course-api.com/react-store-products");
        const data = await response.json();

        // Tomar solo los primeros 3 elementos
        this.items = data.slice(0, 3).map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          category: item.category,
          stock: item.stock || "No disponible",
          image: item.image,
        }));
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
  },
  mounted() {
    this.fetchItems(); // Llamar a la función para obtener datos al cargar la página
  },
}).mount("#app");
