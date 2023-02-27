import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createProductReview } from '../actions/productActions'
import Message from './Message' 

const ProductReview = ({ productId }) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productReviewCreate = useSelector(state => state.productReviewCreate)
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview
  } = productReviewCreate

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(productId, {
      rating,
      comment
    }))
  }

  return (
    <div>
      Write a review

      {loadingProductReview && <Message variant='info'>Loading...</Message>}
      {successProductReview && <Message variant='success'>Review Submitted</Message>}
      {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

      {userInfo ? (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='rating'>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as='select'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value=''>Select...</option>
              <option value='1'>1 - Poor</option>
              <option value='2'>2 - Fair</option>
              <option value='3'>3 - Good</option>
              <option value='4'>4 - Very Good</option>
              <option value='5'>5 - Excellent</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='comment'>
            <Form.Label>Review</Form.Label>
            <Form.Control
              as='textarea'
              row='5'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            disabled={loadingProductReview}
            type='submit'
            variant='primary'
          >
            Submit
          </Button>
        </Form>
      ) : (
        <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
      )}
    </div>
  )
}

export default ProductReview
