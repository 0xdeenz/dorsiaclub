import React, { useEffect, useState } from 'react';
import { ethers } from "ethers"; 
import { Card } from 'react-bootstrap';
import './card.css';

const OfficeCard = (props) => {

    const [tokenMetadata, setTokenMetadata] = useState(null);
    
    const stylizedTokenNumber = () => {
        let num = props.id.toString();
        while (num.length < 4) num = "0" + num;
        return '#' + num
    } 

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            let tokenMetadataURL = null;
            tokenMetadataURL = await props.contract.tokenURI(props.id);
            const response = await fetch(tokenMetadataURL);
            const data = await response.json();
            setTokenMetadata(data);
        }
        if (mounted) {
            fetchData();
        }

        return () => mounted = false;
    // eslint-disable-next-line
    }, [])

    // TODO: show THUMBNAIL, not full IMAGE, in order to reduce total bandwidth
    return(
        <>
        <Card 
            bg='custom' 
            text='custom' 
            style={{  cursor: 'pointer' }} 
        >
            {/* eslint-disable-next-line */}
            <a className='card-link' href={'../card/' + props.id} exact="true"/>
            <Card.Img 
                variant="top" 
                src={tokenMetadata ? tokenMetadata.thumbnail : require('../../images/placeholder_card.png')} 
            />
            <Card.Body>
            <Card.Title>{stylizedTokenNumber(props.id)}</Card.Title>
            <Card.Text>
                {
                tokenMetadata ? 
                    tokenMetadata.card_name ? tokenMetadata.card_name : '? ? ?'
                    : 
                    '? ? ?'
                }
                <br />
                {
                tokenMetadata ? 
                    tokenMetadata.card_position ? tokenMetadata.card_position : '? ? ?'
                    : 
                    '? ? ?'
                }
            </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default OfficeCard;