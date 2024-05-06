import { CardContent, Card, Grid, TextField, Typography, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data.slice(20, 25))
        } catch (error) {
            console.log('Errror:', error)
        }
    }

    return (
        <div className='main'>
            <div className='cont'>
                <Container sx={{ marginTop: 10 }}  >
                    <Typography sx={{ color: 'blue', fontWeight: 'bold', marginTop: 20, marginLeft: 3 }}>GET STARTED</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', marginTop: 2, marginLeft: 3 }}>
                        Ready to become next success story?
                    </Typography>
                    <ul className='list'>
                        {data.map((item, index) => (
                            <li key={index}  >
                                <svg className='tick' width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6H0ZM5.6576 8.568L9.112 4.2496L8.488 3.7504L5.5424 7.4312L3.456 5.6928L2.944 6.3072L5.6576 8.5688V8.568Z" fill="#1BA94C">
                                    </path></svg>
                             
                                {item.title}
                            </li>
                        ))}
                       
                    </ul>
                </Container>
            </div>
            <div className='right-part'>
                <Card sx={{ maxWidth: 450 }}>
                    <CardContent align='center'>
                        <img
                            className='img'
                            src="/LetsTalk.5810206c.png" alt=""  sx={{ width: '100%', marginLeft:'30px' }} />
                        <Typography align='center' sx={{ marginTop: 1, fontSize: '0.75rem',lineHeight:'1.4375rem',color: '#4a4851' }}>
                            Drop Your details below
                        </Typography>
                        <Grid>
                            <Grid>
                                <TextField

                                    variant='outlined'
                                    type='text'
                                    
                                    placeholder='Your name'
                                    // fullWidth required
                                    sx={{ marginTop: 1, width: 400 }}
                                />
                                <TextField
                                    variant='outlined'
                                    type='text'
                                    placeholder='Contact Number'

                                    sx={{ marginTop: 1, width: 400 }}
                                />
                                <TextField
                                    variant='outlined'
                                    type='email'
                                    placeholder='Email'

                                    sx={{ marginTop: 1, width: 400 }}
                                />
                            </Grid>
                            <Typography align='center' sx={{ marginTop: 2, fontSize: '13px' }}>
                                By clicking book a call you accept our teams will also receive
                                <br></br>exclusive offers,updates about new courses,packages
                            </Typography>
                            <Button   type='submit' variant='contained' sx={{ color: '#fff', marginTop: 2, backgroundColor: ' #794df5',  padding: '10px 25px', fontWeight:'600' , textTransform: 'none', FontFamilly:'Poppins',  fontSize: '18px' }} fullWidth required >
                               Book a call
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Main
