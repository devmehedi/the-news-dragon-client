import React from 'react';
import { FaBookmark, FaEye, FaShareAlt,FaRegStar, FaStar } from "react-icons/fa";
import { Card, Image } from 'react-bootstrap';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
      <div>
        <Card className=" mb-4">
          <Card.Header className="d-flex align-items-center">
            <div className="d-flex flex-grow-1">
              <Image
                style={{ height: "40px" }}
                src={author.img}
                alt=""
                roundedCircle
              />
              <div className="px-2">
                <p className="mb-0">{author.name}</p>
                <p>
                  <small>
                    {moment(author.published_date).format("yyyy-MM-D")}
                  </small>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <FaBookmark></FaBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details.length < 250 ? (
                <>{details}</>
              ) : (
                <>
                  {details.slice(0, 250)}...{" "}
                  <Link to={`/news/${_id}`}>Read More</Link>
                </>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex align-items-center">
            <div className="flex-grow-1">
              <Rating className='text-warning'
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
                readonly
              />
              <span className="p-2">{rating.number}</span>
            </div>
            <div className="">
              <FaEye></FaEye>
              <span className="p-2">{total_view}</span>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
};

export default NewsCard;