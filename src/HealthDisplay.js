import React from "react";
import {Card} from "react-bootstrap";
import HealthButton from "./HealthButton";


export default class HealthDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    render() {
        return (
        <>
                <Card>
                    <Card.Body>
                    <Card.Title>
                        {this.state.item.name}
                    </Card.Title>
                    <Card.Text>
                        {this.state.item.sex}
                        </Card.Text>
                        <HealthButton value={this.state.item.id} status={this.state.item.status}/>

                    </Card.Body>

                </Card>




        </>
        );
    }
}


