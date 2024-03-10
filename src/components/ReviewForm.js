import React from "react";
import Stars from "./Stars";

//Review form component
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      user: "",
      stars: 0,
    };
  }

  //when the star gets clicked it sets the number of stars given
  handleStarClick = (stars) => {
    this.setState({ stars });
  };

  //When the form changes it assigns the value to the review fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ review: "", user: "", stars: 0 });
  };

  //Renders the form
  render() {
    return (
      <div className="card card-default mb-3 mt-3">
        <div className="card-body bg-light">
          <h5 className="card-title">Add Review</h5>
          <form onSubmit={this.handleSubmit} className="mb-3">
            <div className="mb-3">
              <label htmlFor="user" className="form-label">
                User:
              </label>
              <input
                type="text"
                id="user"
                name="user"
                value={this.state.user}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <Stars
              selectedStars={this.state.stars}
              onStarClick={this.handleStarClick}
            />
            <div className="mb-3 mt-3">
              <label htmlFor="review" className="form-label">
                Review:
              </label>
              <textarea
                type="text"
                id="review"
                name="review"
                value={this.state.review}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Add Review
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
