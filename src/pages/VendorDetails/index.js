import React, { useEffect } from "react"
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AddReview from "../../components/AddReview"
import Car from "../../components/Car"
import { selectRacerToken } from "../../store/racer/selectors"
import { fetchVendorById } from "../../store/vendorsDetails/actions"
import {
	selectReview,
	selectVendors,
} from "../../store/vendorsDetails/selectors"

export default function VendorDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()

	const vendor = useSelector(selectVendors)
	const reviews = useSelector(selectReview)
	const token = useSelector(selectRacerToken)

	useEffect(() => {
		dispatch(fetchVendorById(id))
	}, [dispatch, id, reviews])

	return (
		<>
			<Container>
				<Row>
					<Col sm={2}>
						<img alt="logo" src={vendor.imageUrl} style={{ width: "150px" }} />
					</Col>
					<Col sm={10}>
						<h3>{vendor.name}</h3>
						<p>{vendor.description}</p>
					</Col>
				</Row>
				<Row>
					<h3>Cars for rent @ {vendor.name}</h3>
				</Row>
				<Row>
					<CardDeck style={{ display: "block" }}>
						{!vendor.cars
							? "Loading..."
							: vendor.cars.map((car) => {
									return (
										<Card
											style={{
												display: "inline-block",
												width: "360px",
												marginBottom: "20px",
											}}
										>
											<Car
												key={car.id}
												id={car.id}
												brand={car.brand}
												model={car.model}
												gearbox={car.gearbox}
												bhp={car.bhp}
												imageUrl={car.imageUrl}
											/>
										</Card>
									)
							  })}
					</CardDeck>
				</Row>
				<Row>
					<h4>Reviews</h4>
				</Row>
				<Row>
					{!vendor.ratings
						? "Loading..."
						: vendor.ratings.map((rating) => {
								return (
									<Card style={{ width: "100%", marginBottom: "20px" }}>
										<Card.Body>
											<h4>{rating.rating}/5</h4>

											<p>{rating.comment}</p>
										</Card.Body>
									</Card>
								)
						  })}
				</Row>
				<Row>
					{token ? (
						<AddReview />
					) : (
						<p
							style={{
								fontStyle: "italic",
								padding: "10px",
							}}
						>
							You have to be logged in as a Racer to add a review.
						</p>
					)}
				</Row>
			</Container>
		</>
	)
}
