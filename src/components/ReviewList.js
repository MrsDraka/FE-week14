import React from "react";
import Review from "./Review";

export default class ReviewList extends React.Component {
  render() {
    const { reviews } = this.props;
    return (
      //Iterates through all the reviews for each movie and sends each one to the Riview component
      <div>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    );
  }
}
