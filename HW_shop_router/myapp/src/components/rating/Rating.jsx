
import React from 'react';

export default function Rating({ rating }) {
  const roundedRating = Math.round(rating);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starStyle = i <= roundedRating ? { color: 'orange' } : null;
      stars.push(<span key={i} style={starStyle} className="fa fa-star"></span>);
    }

    return stars;
  };

  return (
    <div className="rating"  renderStars={renderStars}>
      {renderStars()}
    </div>
  );
}