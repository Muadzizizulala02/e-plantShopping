import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Bring a little paradise home. Browse our hand-picked aromatic and medicinal house plants,
          ready to brighten your windowsills.
        </p>
        <Link to="/products" className="btn btn-primary">
          Shop Plants
        </Link>
      </div>
    </section>
  )
}

export default LandingPage
