import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper,Box,Button ,Typography} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.white.main,
      height:650,
      textAlign:"center"

    },
    mainWrapper:{
        border:"1px solid #ccc",
      backgroundColor: "#fff",
      width:400,
      height:200,
      textAlign:"center",
      marginLeft:"34%",

    },
    preview:{
   height: 100,
  width: "auto",
  border:"1px solid #ccc",
  textAlign:"center",

    }
  }));

const initialState = { alt: "", src: "" };

const App = () => {
  const classes = useStyles();

  const [{ alt, src }, setPreview] = useState(initialState);

  const fileHandler = (event) => {
    const { files } = event.target;
    setPreview(
      files.length
        ? {
            src: URL.createObjectURL(files[0]),
            alt: files[0].name
          }
        : initialState
    );
  };

  return (
    <React.Fragment>
    <Paper className={classes.root}>
    <br />
    <br />
    <br />
        <Box className={classes.mainWrapper}>
            <br />
            <div>
              <Typography component="h4"  style={{marginRight:"55%"}}>Upload File</Typography>
             <input accept="image/*" type="file" onChange={fileHandler} />
            </div>
    <br />

            <div>
              <Typography component="h4"   style={{marginRight:"45%"}}>Upload  XML File</Typography>
             <input accept="xml/*" type="file"  />
            </div>
        <div style={{textAlign:"right",padding:"10px"}}>
        <Button variant="contained" color="primary"  onClick={()=><div>{window.location.reload(),
        alert("Files Uploaded successfully")}</div>}>
         Submit
        </Button>
        </div>

        </Box>
    <br />

        <Box>
        <img className={classes.preview}  src={src} alt={alt} />
        </Box>
    </Paper>
    </React.Fragment>

  );
};

export default App;
