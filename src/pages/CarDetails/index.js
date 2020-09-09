import React, { useEffect } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchCarById } from "../../store/carDetails/actions"
import { selectCarDetails } from "../../store/carDetails/selectors"
import { fetchVendors } from "../../store/vendorsDetails/actions"
import { selectVendors } from "../../store/vendorsDetails/selectors"
import { selectRacerToken } from "../../store/racer/selectors"
// import { selectToken, selectUser } from "../../store/user/selectors"

export default function CarDetails(props) {
	const { id } = useParams()
	const dispatch = useDispatch()
	const car = useSelector(selectCarDetails)

	console.log("car", car)

	const tracks = car.tracks

	const vendors = useSelector(selectVendors)
	const token = useSelector(selectRacerToken)

	useEffect(() => {
		dispatch(fetchCarById(id))
		dispatch(fetchVendors())
	}, [dispatch, id])

	return (
		<>
			<Container>
				<Row>
					<Col>
						<img src={car.imageUrl} alt="car" style={{ width: "400px" }} />
					</Col>
					<Col>
						<h3 style={{ textShadow: "1px 1px #fff" }}>
							{car.brand} {car.model}
						</h3>
						<p>{car.description}</p>{" "}
						<p>This car is available on the following track(s):</p>
						<ul>
							{!tracks
								? "Loading..."
								: tracks.map((track) => {
										return <li>{track.name}</li>
								  })}
						</ul>
						{!token ? null : (
							<Link to={`/cars/${car.id}/book`}>
								<Button variant="success">Book this car!</Button>
							</Link>
						)}
					</Col>
					<Col>
						<Card>
							<Card.Header>
								<h3>About this vendor</h3>
							</Card.Header>
							<Card.Body>
								{!vendors[0]
									? "Loading..."
									: vendors.map((vendor) => {
											if (vendor.id === car.vendorId)
												return (
													<div key={vendor.id}>
														<img
															alt="logo"
															src={vendor.imageUrl}
															style={{ width: "150px" }}
														/>
														<p>Name: {vendor.name}</p>
														<Link to={`/vendors/${vendor.id}`}>
															<Button variant="secondary">
																Visit Vendors page
															</Button>
														</Link>
													</div>
												)
									  })}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}
