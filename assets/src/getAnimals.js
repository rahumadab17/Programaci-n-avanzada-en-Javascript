let animales = (() => {
    const url = "./animales.json";
    const getData = async () => {
      const res = await fetch(url);
      const { animales } = await res.json();
      return animales;
    };
    return { getData };
  })();

export default animales;