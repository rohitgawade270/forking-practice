import React from 'react'
import {Container, Grid, Typography} from '@mui/material'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import Cards from '../components/Cards'


export default function Home() {

    const data = [
        { title: 'John Doe', subheader: 'September 14, 2022', image: img1, color:'red', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'Rohan Patil', subheader: 'September 14, 2022', image: img2, color:'green', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'Aniket Chate', subheader: 'September 14, 2022', image: img3, color:'blue', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'John Doe', subheader: 'September 14, 2022', image: img4, color:'black', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'John Doe', subheader: 'September 14, 2022', image: img1, color:'gray', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'Rohan Patil', subheader: 'September 14, 2022', image: img2, color:'pink', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'Aniket Chate', subheader: 'September 14, 2022', image: img3, color:'purple', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' },
        { title: 'John Doe', subheader: 'September 14, 2022', image: img4, color:'orange', aboutText: 'Chameleons or chamaeleons are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015.' }
    ];


    return (
        <Container sx={{ marginY: '20px' }}>
           <Typography variant='h4' my={5} textAlign='center'>Information about birds and animals</Typography> 
            <Grid container spacing={2}>
                {data.map((data,i) => {
                    return <Grid key={i} item xs={12}  lg={4} sm={6}>
                        <Cards data={data} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}
