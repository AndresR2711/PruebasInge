import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {uploadImage} from "../actions/uploadActions";

const ImageUploader = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [imageName, setImageName] = useState("");
    const {image} = useSelector(state => state.upload);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        setImageData(imageData);
        setImagePreview(URL.createObjectURL(file));
    };

    const uploadImageWithAdditionalData = () => {
        imageData.append('imageName', imageName);
        dispatch(uploadImage(imageData));
    };

    const handleChange = event => {
        setImageName(event.target.value)
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={
                                    imagePreview !== null ?
                                        imagePreview :
                                        "https://www.amerikickkansas.com/wp-content/uploads/2017/04/default-image.jpg"}
                            />
                        </CardActionArea>
                    </Card>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="upload-profile-image"
                        type="file"
                        onChange={handleUploadClick}
                    />
                    <label htmlFor="upload-profile-image">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.imageChangeButton}
                            component="span"
                        >
                            Change Image
                        </Button>
                    </label>
                    <TextField
                        fullWidth
                        label="Image Name"
                        margin="dense"
                        name="name"
                        className={classes.imageName}
                        onChange={handleChange}
                        required
                        value={imageName}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.imageChangeButton}
                        onClick={() => uploadImageWithAdditionalData()}
                    >
                        Upload Image
                    </Button>
                    <Typography className={classes.finalText}>{image === null ? "Select An Image To Upload" : "Image Uploaded. Saved as " + image}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ImageUploader;