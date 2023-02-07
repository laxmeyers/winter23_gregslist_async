export class House {
    constructor(data) {
        this.id = data.id || ''
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.img = data.imgUrl
        this.year = data.year
        this.levels = data.levels
        this.price = data.price
        this.description = data.description
    }

    get HouseCard() {
        return `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${this.img}" class="card-img-top car-img"
              alt="car">
            <div class="card-body">
              <div class="card-title fs-5">Bedrooms:${this.bedrooms} bathrooms: ${this.bathrooms}</div>
              <p>${this.description ? this.description : "It's a house!"}</p>
              <div class="d-flex justify-content-between">
              <button class="btn ms-1 btn-danger" type="button" onclick="app.housesController.removeHouse('${this.id}')">Delete House!</button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.housesController.drawEditHouseForm('${this.id}')">Edit House!</button>
              </div>
              </div>
          </div>
        </div>
        `
    }

    static FormButton() {
        return `
        <button class="btn btn-success ms-3 mb-2" data-bs-toggle="modal"
          data-bs-target="#exampleModal" onclick="app.housesController.drawForm()">
          <i class="mdi mdi-plus"></i>
        </button>
        `
    }

    static HouseForm() {
        return `
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Houses</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="app.housesController.createHouse()">
            <div class="modal-body">
              <div class="mb-3">
                <label for="bedrooms" class="form-label">bedrooms</label>
                <input required type="number" class="form-control" id="bedrooms" placeholder="bedrooms..." name="bedrooms">
              </div>
              <div class="mb-3">
                <label for="bathrooms" class="form-label">bathrooms</label>
                <input required type="number" class="form-control" id="bathrooms" placeholder="bathrooms..." name="bathrooms">
              </div>
              <div class="mb-3">
                <label for="levels" class="form-label">levels</label>
                <input required type="number" class="form-control" id="levels" placeholder="levels..." name="levels">
              </div>
              <div class="mb-3">
                <label for="year" class="form-label">year</label>
                <input required type="number" class="form-control" id="year" placeholder="year..." name="year">
              </div>
              <div class="mb-3">
                <label for="img" class="form-label">img</label>
                <input required type="text" class="form-control" id="img" placeholder="img..." name="imgUrl">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input required type="number" class="form-control" id="price" placeholder="price..." name="price">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <textarea name="description" class="form-control" id="description" rows="3">
                </textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        `
    }

    static HouseEditForm(house) {
        return `
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Houses</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onsubmit="app.housesController.editHouse('${house.id}')">
            <div class="modal-body">
              <div class="mb-3">
                <label for="bedrooms" class="form-label">bedrooms</label>
                <input required type="number" class="form-control" id="bedrooms" value="${house.bedrooms}" placeholder="bedrooms..." name="bedrooms">
              </div>
              <div class="mb-3">
                <label for="bathrooms" class="form-label">bathrooms</label>
                <input required type="number" class="form-control" id="bathrooms" value="${house.bathrooms}" placeholder="bathrooms..." name="bathrooms">
              </div>
              <div class="mb-3">
                <label for="levels" class="form-label">levels</label>
                <input required type="number" class="form-control" id="levels" value="${house.levels}" placeholder="levels..." name="levels">
              </div>
              <div class="mb-3">
                <label for="year" class="form-label">year</label>
                <input required type="number" class="form-control" id="year" value="${house.year}" placeholder="year..." name="year">
              </div>
              <div class="mb-3">
                <label for="img" class="form-label">img</label>
                <input required type="text" class="form-control" id="img" placeholder="img..." name="imgUrl">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input required type="number" class="form-control" id="price" placeholder="price..." name="price">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <textarea name="description" class="form-control" id="description" rows="3">
                </textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        `
    }
}
