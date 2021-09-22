import React from 'react';

import Card from '../components/Card';

import stock_0 from '../assets/images/stock_photo_1.jpg'
import stock_1 from '../assets/images/stock_photo_1.jpg'
import stock_2 from '../assets/images/stock_photo_2.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {CardColumns} from "react-bootstrap";


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Title',
                    subTitle: 'Subtitle',
                    imgSrc: stock_0,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Title',
                    subTitle: 'Subtitle',
                    imgSrc:stock_1,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title',
                    subTitle: 'Subtitle',
                    imgSrc: stock_2,
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true} className={""}>
                <Col className="">
                    {this.makeItems(this.state.items)}
                </Col>
            </Container>
        );
    }

}

export default Carousel;