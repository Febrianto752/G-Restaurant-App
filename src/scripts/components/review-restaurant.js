class ReviewRestaurant extends HTMLElement {
  set restaurant({
    id,
    name,
  }) {
    this._restaurant = {
      id,
      name,
    };
    this.render();
  }

  render() {
    this.setAttribute('class', 'review-restaurant');
    this.innerHTML = `
    <button class="btn-close"><a href="#/detail/${this._restaurant.id}"><i class="fas fa-times"></i></a></button>
    <form class="form-review">
      <h3 tabindex="0">Review : ${this._restaurant.name}</h3>
      <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder="your name ..." required>
      </div>
      <div class="form-textarea">
          <label for="review">Comment</label>
          <textarea name="review" id="review" cols="30" rows="4" maxlength="100" placeholder="your comment about restaurant" required></textarea>
      </div>

      <button type="button" id="submit">Submit</button>
    </form>   
    `;
  }
}

customElements.define('review-restaurant', ReviewRestaurant);
