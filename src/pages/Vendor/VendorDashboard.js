import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { selectVendorToken } from "../../store/vendor/selectors"
import { selectVendor } from "../../store/vendorsDetails/selectors"
import { Card, Col, Row } from "react-bootstrap"

export default function Vendor() {
	const vendor = useSelector(selectVendor)
	console.log("vendor", vendor)

	const token = useSelector(selectVendorToken)
	const history = useHistory()

	useEffect(() => {
		if (token === null) {
			history.push("/")
		}
	})

	return (
		<>
			<h1>Welcome, {vendor.name}</h1>
			<Row>
				<Col sm={10}>
					<Card>
						<p>{vendor.description}</p>
						{/* <Link>change your description</Link> */}
					</Card>
				</Col>
				<Col sm={2}>{/* <Card><img src={vendor.imageUrl} /></Card> */}</Col>
			</Row>
		</>
	)
}
