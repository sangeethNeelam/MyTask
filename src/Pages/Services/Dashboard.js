// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

//Local Imports
import { BannerImg } from "@/Components";
import bannerImg from "@/Assets/Data-warehouse.jpg";

//Material UI Styles
const useStyles = makeStyles(({ spacing, palette }) => ({}));

type Props = {};

const Dashboard = (props: Props): Node => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <BannerImg
          bannerImg={bannerImg}
          title="Executive Dashboards / Data Warehouse"
        />
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;