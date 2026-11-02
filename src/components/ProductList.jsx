import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar.jsx'
import { addItem, selectCartItems } from '../redux/CartSlice.jsx'
import { formatPrice } from '../utils/formatPrice.js'

const plantCategories = [
  {
    id: 'aromatic',
    title: 'Aromatic Plants',
    description:
      'Fragrant leaves and blossoms that freshen up any room. These plants release soothing scents and are easy to keep on a sunny windowsill.',
    plants: [
      {
        id: 'lavender',
        name: 'Lavender',
        description: 'A calming, fragrant flowering plant that loves bright light and well-drained soil.',
        cost: 14.99,
        image: './images/lavender.svg',
      },
      {
        id: 'rosemary',
        name: 'Rosemary',
        description: 'Needle-like evergreen leaves with a sharp, woodsy aroma. Perfect for the kitchen.',
        cost: 12.5,
        image: './images/rosemary.svg',
      },
      {
        id: 'basil',
        name: 'Sweet Basil',
        description: 'A bushy herb with glossy green leaves and a classic sweet, peppery fragrance.',
        cost: 9.99,
        image: './images/basil.svg',
      },
    ],
  },
  {
    id: 'medicinal',
    title: 'Medicinal Plants',
    description:
      'Traditional healing plants that are simple to grow indoors. Many have soothing leaves and gentle, calming teas.',
    plants: [
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        description: 'A succulent with thick gel-filled leaves, known for soothing minor burns and skin irritation.',
        cost: 11.25,
        image: './images/aloe-vera.svg',
      },
      {
        id: 'chamomile',
        name: 'Chamomile',
        description: 'Daisy-like blooms used for relaxing herbal tea. Thrives in cool, sunny spots.',
        cost: 10.75,
        image: './images/chamomile.svg',
      },
      {
        id: 'lemon-balm',
        name: 'Lemon Balm',
        description: 'A lemon-scented herb traditionally brewed to ease stress and support restful sleep.',
        cost: 13.4,
        image: './images/lemon-balm.svg',
      },
    ],
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const handleAddToCart = (plant) => {
    dispatch(addItem({ id: plant.id, name: plant.name, image: plant.image, cost: plant.cost }))
  }

  return (
    <>
      <NavBar />
      <main className="products-page">
        {plantCategories.map((category) => (
          <section key={category.id} className="category">
            <h2>{category.title}</h2>
            <p className="category-description">{category.description}</p>

            <div className="plant-grid">
              {category.plants.map((plant) => {
                const cartItem = cartItems.find((item) => item.id === plant.id)
                const isAdded = Boolean(cartItem)

                return (
                  <article key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <div className="plant-info">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <div className="plant-footer">
                        <span className="plant-cost">{formatPrice(plant.cost)}</span>
                        <button
                          type="button"
                          className={isAdded ? 'btn btn-added' : 'btn btn-primary'}
                          onClick={() => handleAddToCart(plant)}
                          disabled={isAdded}
                        >
                          {isAdded ? `Added (${cartItem.quantity}) ✓` : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default ProductList
