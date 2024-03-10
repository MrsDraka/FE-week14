import React from "react";

export default class Review extends React.Component {
  renderStars(numStars) {
    const stars = [];
    //Checks how many stars were given by a user
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${
            i < numStars
              ? "bi-star-fill text-warning"
              : "bi-star text-secondary"
          }`}
        ></i>
      );
    }
    return stars;
  }

  render() {
    const { review, user, stars } = this.props.review;
    //Shows the review
    return (
      <div className="card card-default mb-2">
        <div className="card-body bg-light">
          <div>User: {user}</div>
          <div>{this.renderStars(stars)}</div>
          <div>Review: {review}</div>
        </div>
      </div>
    );
  }
}
