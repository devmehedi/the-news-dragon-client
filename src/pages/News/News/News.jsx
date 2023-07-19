import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details } = news;
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Button className="bg-danger" variant="primary">
            <FaArrowLeft className='me-2'></FaArrowLeft>
              All news in this category
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default News;