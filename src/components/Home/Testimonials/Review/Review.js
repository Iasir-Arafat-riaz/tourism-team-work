import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faStar } from '@fortawesome/free-solid-svg-icons'
import { Card, Col } from 'react-bootstrap';
import "./Review.css"

const Review = (props) => {
    const{name,description,rating}=props.review
    console.log(description);
    return (
        <div>
            <Col data-aos="flip-left">
        <Card id="rev" className="singleReview">
          <Card.Body>
            <Card.Title>
              {" "}
              <h6>
                <b>
                  <FontAwesomeIcon icon={faUser} /> {name}
                </b>
              </h6>
            </Card.Title>

           {/* <small> {email}</small> */}
            <Card.Text>
              <small className='reviewComment'><i class="far fa-comment "></i> {description}</small>
            </Card.Text>

            {rating === 5 ? (
              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 5 && rating >= 4 ? (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 4 && rating >= 3 ? (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 3 && rating >= 2 ? (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : (
              <div >
                <FontAwesomeIcon className="icons" icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Review;