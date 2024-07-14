export interface CardData {
  name: string;
  review: string;
}

export interface ReviewData {
  name: string;
  rating: number;
}

const cardData: CardData[] = [
  {
    name: "Colton Smith",
    review: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    name: "Irene Roberts",
    review: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    name: "Anne Wallace",
    review: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];

const reviewData: ReviewData[] = [
  {
    name: "Reviews",
    rating: 5,
  },
  {
    name: "Report Guru",
    rating: 5,
  },
  {
    name: "BestTech",
    rating: 5,
  },
];

export { cardData, reviewData };
