import React, { useEffect } from "react"
import { Card, Col, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { fetchCars } from "../../store/cars/actions"
import { selectRacer, selectRacerToken } from "../../store/racer/selectors"

export default function Racer() {
	const dispatch = useDispatch()
	const racer = useSelector(selectRacer)

	const allBookings = !racer.bookings
		? null
		: racer.bookings.map((booking) => {
				return booking
		  })

	console.log("bookings", allBookings)

	const token = useSelector(selectRacerToken)
	const history = useHistory()

	useEffect(() => {
		dispatch(fetchCars())
	}, [dispatch])

	return (
		<>
			<h1>Welcome, {racer.name}</h1>
			<Row>
				<Col sm={10}>
					<Card>
						<Card.Body>
							<h3>Bookings</h3>
							{allBookings === null ? (
								<p>You have no bookings yet</p>
							) : (
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Racecar</th>
											<th>Date</th>
											<th>Location</th>
											<th>Contact</th>
										</tr>
									</thead>
									<tbody>
										{allBookings.map((booking) => {
											return (
												<>
													<tr>
														<td>
															{booking.car.brand} {booking.car.model}
														</td>
														<td>{booking.orderDate}</td>
														<td>{booking.track.name}</td>
														<td>{booking.car.vendor.email}</td>
													</tr>
												</>
											)
										})}
									</tbody>
								</Table>
							)}
						</Card.Body>
					</Card>
				</Col>
				<Col sm={2}>
					<Card>
						<Card.Body>
							<h4>Personal information</h4>
							<img width="200px" src={racer.imageUrl} />

							<p>Name: {racer.name}</p>
							<p>Email: {racer.email}</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}
