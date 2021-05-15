// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import { BannerImg } from "@/Components";
import bannerImg from "@/Assets/appdevbanner.jpg";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const App = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg bannerImg={bannerImg} />
      </Box>
    </React.Fragment>
  );
};

export default App;