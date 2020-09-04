import React, { useEffect } from "react"
import { fetchCarById } from "../../store/carDetails/actions"
import { selectCarDetails } from "../../store/carDetails/selectors"
import { selectVendors } from "../../store/vendorsDetails/selectors"
import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { fetchVendors } from "../../store/vendorsDetails/actions"
// import { selectToken, selectUser } from "../../store/user/selectors"

export default function CarDetails(props) {
	const { id } = useParams()
	const dispatch = useDispatch()
	const car = useSelector(selectCarDetails)
	const vendors = useSelector(selectVendors)
	console.log("vendors", vendors)

	useEffect(() => {
		dispatch(fetchCarById(id))
	}, [dispatch, id])

	useEffect(() => {
		dispatch(fetchVendors())
	}, [dispatch])

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
						<p>{car.description}</p>
					</Col>
					<Col>
						<Card>
							<Card.Header>
								<h3>About this vendor</h3>
							</Card.Header>
							<Card.Body>
								{!vendors
									? "Loading..."
									: vendors.map((vendor) => {
											if (vendor.id === car.vendorId)
												return (
													<div key={vendor.id}>
														<img
															src={vendor.imageUrl}
															style={{ width: "150px", height: "100px" }}
														/>
														<p>Name: {vendor.businessName}</p>
														<Link to={`/vendors/${vendor.id}`}>
															<Button>Visit Vendors page</Button>
														</Link>
													</div>
												)
									  })}
							</Card.Body>
							<Card.Footer>Rating</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}
