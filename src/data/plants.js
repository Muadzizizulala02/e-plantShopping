const imagePath = (file) => `./images/${file}`

export const plantCategories = [
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
        image: imagePath('lavender.svg'),
      },
      {
        id: 'rosemary',
        name: 'Rosemary',
        description: 'Needle-like evergreen leaves with a sharp, woodsy aroma. Perfect for the kitchen.',
        cost: 12.5,
        image: imagePath('rosemary.svg'),
      },
      {
        id: 'basil',
        name: 'Sweet Basil',
        description: 'A bushy herb with glossy green leaves and a classic sweet, peppery fragrance.',
        cost: 9.99,
        image: imagePath('basil.svg'),
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
        image: imagePath('aloe-vera.svg'),
      },
      {
        id: 'chamomile',
        name: 'Chamomile',
        description: 'Daisy-like blooms used for relaxing herbal tea. Thrives in cool, sunny spots.',
        cost: 10.75,
        image: imagePath('chamomile.svg'),
      },
      {
        id: 'lemon-balm',
        name: 'Lemon Balm',
        description: 'A lemon-scented herb traditionally brewed to ease stress and support restful sleep.',
        cost: 13.4,
        image: imagePath('lemon-balm.svg'),
      },
    ],
  },
]
