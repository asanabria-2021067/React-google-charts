import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { db } from "../../../firebase-config"; // importamos la conexion a firebase
import { collection, addDoc, getDocs } from "firebase/firestore"; // importamos los metodos de firebase para agregar, actualizar y eliminar documentos
import Swal from 'sweetalert2';
import { useAppStore } from '../../../appStore'; // importamos el store de zustand: useAppStore


export default function AddProducts({ closeEvent }) {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const setRows = useAppStore((state) => state.setRows); // traer los datos de firebase y guardarlos en rows  
    const empCollectionRef = collection(db, "products"); // referencia a la coleccion de firebase


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const currencies = [
        {
            value: 'Mobiles',
            label: 'Mobiles',
        },
        {
            value: 'Laptops',
            label: 'Laptops',
        },
        {
            value: 'Accessories',
            label: 'Accessories',
        },
        {
            value: 'Gaming',
            label: 'Gaming',
        },
        {
            value: 'Televisions',
            label: 'Televisions',
        },
    ];

    const getUsers = async () => { // traer los datos de firebase y guardarlos en rows
        const data = await getDocs(empCollectionRef);  // getDocs: lee todos los documentos de una colección  getDocs(collection(db, "users"));
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const createProduct = async () => {
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Intl.DateTimeFormat(['ban', 'id']).format(new Date())),
        });
        getUsers();
        closeEvent();
        Swal.fire("Success", "Product Added Successfully", "success");

        //recargar la pagina
        //        window.location.reload();


    }

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align='center'>
                Agregar Producto
            </Typography>
            <IconButton
                style={{ position: 'absolute', right: '0', top: '0' }}
                onClick={closeEvent}
            >
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Product Name"
                        variant="outlined"
                        size='small'
                        sx={{ minWidth: "100%" }}
                        value={name}
                        onChange={handleNameChange}
                    />
                </Grid>
                <Grid item xs={6} >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        size='small'
                        sx={{ minWidth: "100%" }}
                        type='number'

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    Q.
                                </InputAdornment>
                            ),
                        }}

                        value={price}
                        onChange={handlePriceChange}
                    />
                </Grid>
                <Grid item xs={6} >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        size='small'
                        sx={{ minWidth: "100%" }}
                        value={category}
                        onChange={handleCategoryChange}
                        select
                    >
                        {
                            currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant='h5' align='center'>
                        <Button
                            variant="contained"
                            sx={{ minWidth: "100%" }}
                            onClick={createProduct}
                        >
                            Add
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ m: 4 }} />

        </>
    )
}
