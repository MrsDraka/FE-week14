import React from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

//This is the movie comopnent
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  //This adds the reviews for each movie
  handleAddReview = (review) => {
    this.setState({ reviews: [...this.state.reviews, review] });
  };

  render() {
    //Used object destructuring to extract the movie properties and assign them to variables so they're easier to handle
    const { key, title, director, year, synopsis, image } = this.props.movie;

    return (
      <div className="card mb-5" id={"key_" + key}>
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4 col-lg-2">
              <img src={`/images/${image}`} alt="" className="img-fluid" />
            </div>
            <div className="col-8 col-lg-10">
              <p className="card-text">
                <small className="text-muted">Year: {year}</small>
              </p>
              <h6 className="card-subtitle mb-2 text-muted">{director}</h6>
              <p className="card-text">{synopsis}</p>
            </div>
          </div>
          <ReviewForm onSubmit={this.handleAddReview} /> {/*shows review form*/}
          <ReviewList reviews={this.state.reviews} /> {/*shows review list*/}
        </div>
      </div>
    );
  }
}
