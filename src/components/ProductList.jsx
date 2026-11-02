import { useDispatch } from 'react-redux'
import { plantCategories } from '../data/plants.js'
import { addItem } from '../redux/CartSlice.jsx'
import { formatPrice } from '../utils/formatPrice.js'

function ProductList() {
  const dispatch = useDispatch()

  const handleAddToCart = (plant) => {
    dispatch(addItem({ id: plant.id, name: plant.name, image: plant.image, cost: plant.cost }))
  }

  return (
    <div className="products-page">
      {plantCategories.map((category) => (
        <section key={category.id} className="category">
          <h2>{category.title}</h2>
          <p className="category-description">{category.description}</p>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-footer">
                    <span className="plant-cost">{formatPrice(plant.cost)}</span>
                    <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList
