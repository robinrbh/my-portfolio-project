import React from "react"
import { Card, CardColumns, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Car(props) {
	return (
		<CardColumns style={{ display: "block" }}>
			<Card
				style={{
					textAlign: "center",
					display: "inline-block",
					minWidth: "300px",
				}}
			>
        <Card.Img
					variant="top"
					src={props.imageUrl}
					style={{ width: "100%" }}
				/>
				<Card.Body>
					<Card.Title>
						<h4>{props.brand}</h4>
					</Card.Title>
				</Card.Body>
				<Card.Footer>
          Footer

				</Card.Footer>
			</Card>
		</CardColumns>
	)
}
