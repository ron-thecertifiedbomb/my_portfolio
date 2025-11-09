export const renderProductTitles = async () => {
  const loadingIndicator = document.querySelectorAll(".loading");
  const productLists = document.querySelectorAll(".product-list");
  const url = "https://dummyjson.com/products/search?q=phone";

  loadingIndicator.forEach((loader) => {
    loader.style.display = "block";
  });

  try {
    const data = await fetch(url);

    loadingIndicator.forEach((loader) => {
      loader.style.display = "none";
    });

    if (!data || !data.products || data.products.length === 0) {
      productLists.forEach((list) => {
        list.innerHTML = "<li>No products found 😢</li>";
      });
      return;
    }

    const productTitles = data.products.map((product) => product.title);

    productLists.forEach((list) => {
      list.innerHTML = "";

      productTitles.forEach((title) => {
        const listItem = document.createElement("li");
        listItem.innerText = title;
        list.appendChild(listItem);
      });
    });

    console.log("Product Titles Rendered:", productTitles);
  } catch (error) {
    loadingIndicator.forEach((loader) => {
      loader.innerText = "Error fetching data 😭";
      loader.style.color = "red";
    });
    console.error("Error:", error.message);
  }
};
