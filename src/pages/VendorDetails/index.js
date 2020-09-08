import React, { useEffect } from "react"
import { fetchVendorById } from "../../store/vendorsDetails/actions"
import {
	selectVendors,
	selectReview,
} from "../../store/vendorsDetails/selectors"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap"
import Car from "../../components/Car"
import AddReview from "../../components/AddReview"
import { selectRacerToken } from "../../store/racer/selectors"

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
				<Row style={{ marginBottom: "40px" }}>
					<Col sm={2}>
						<img alt="logo" src={vendor.imageUrl} style={{ width: "150px" }} />
					</Col>
					<Col sm={10}>
						<h3>{vendor.name}</h3>
						<p>{vendor.description}</p>
					</Col>
				</Row>
				<Row style={{ marginBottom: "20px" }}>
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
				<Row>{token ? <AddReview /> : null}</Row>
			</Container>
		</>
	)
}
