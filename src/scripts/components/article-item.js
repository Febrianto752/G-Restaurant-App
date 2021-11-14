class ArticleItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="material" tabindex="0">
                <h2 tabindex="0">healthy food</h2>
                <p tabindex="0">Healthy food is food that should contain a variety of nutrients needed by the body. The
                    body needs a
                    variety of nutrients in order to stay healthy and growth can run optimally. Healthy food
                    requirements (4 healthy 5 perfect), namely clean, have good nutrition and balanced. A balanced
                    healthy diet is food that contains carbohydrates, proteins, fats, and vitamins.

                    We can eat a variety of healthy foods, without being limited to one type. Eating different types of
                    food can provide different nutrients, so that the nutrients needed by the body can be met.</p>
                <blockquote cite="https://id.pinterest.com/pin/671669731905765621/" tabindex="0">
                    "A Healty Outside Starts From The Inside" <br>
                    ~ Robert Urich
                </blockquote>
            </article>
    `;
  }
}

customElements.define('article-item', ArticleItem);
