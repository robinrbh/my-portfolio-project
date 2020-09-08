import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { postReview } from "../../store/vendorsDetails/actions"

export default function AddReview() {
	const dispatch = useDispatch()
	const [comment, setComment] = useState("")
	const [rating, setRating] = useState("")

	function submitForm(event) {
		event.preventDefault()
		dispatch(postReview(comment, rating))

		setComment("")
		setRating("")
	}

	return (
		<Container>
			<Form>
				<h4 className="mt-5 mb-5">Post a review</h4>

				<Form.Group controlId="formBasicComment">
					<Form.Label>Comment</Form.Label>
					<Form.Control
						value={comment}
						onChange={(event) => setComment(event.target.value)}
						type="comment"
						placeholder="Enter comment"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Enter a rating between 1 and 5</Form.Label>
					<Form.Control
						type="number"
						min={1}
						max={5}
						value={rating}
						onChange={(event) => setRating(event.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mt-5">
					<Button variant="primary" type="submit" onClick={submitForm}>
						Post comment
					</Button>
				</Form.Group>
			</Form>
		</Container>
	)
}
