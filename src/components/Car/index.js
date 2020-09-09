import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Car(props) {
	return (
		// <CardDeck style={{ display: "block" }}>
		<>
			<Card.Img
				variant="top"
				src={props.imageUrl}
				style={{ width: "100%", height: "280px", objectFit: "cover" }}
			/>

			<Card.Body>
				<Card.Title>
					<Row>
						<Col sm={8}>
							<p>
								{props.brand} {props.model}
							</p>
							<span style={{ fontSize: "12px", fontStyle: "italic" }}>
								{props.bhp} bhp / {props.gearbox}
							</span>
						</Col>
						<Col sm={4} style={{ textAlign: "right" }}>
							<Link to={`/cars/${props.id}`}>
								<Button variant="info">See details</Button>
							</Link>
						</Col>
					</Row>
				</Card.Title>
			</Card.Body>
		</>
		// </CardDeck>
	)
}
