const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-sm space-y-2">
          <div className="flex items-center">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h4 className="font-bold">{review.name}</h4>
              <p className="text-yellow-500">{review.rating} ★</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;

