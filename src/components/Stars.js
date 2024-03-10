import React from "react";

//This is the star component
class Stars extends React.Component {
  handleStarClick = (index) => {
    this.props.onStarClick(index + 1);
  };

  renderStars(numStars) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${
            i < numStars
              ? "bi-star-fill text-warning"
              : "bi-star text-secondary"
          }`}
          onClick={() => this.handleStarClick(i)}
          style={{ cursor: "pointer" }}
        ></i>
      );
    }
    return stars;
  }

  render() {
    const { selectedStars } = this.props;
    return (
      //shows the number of stars given by the user
      <div>
        {this.renderStars(selectedStars)} {selectedStars}
      </div>
    );
  }
}

export default Stars;
