import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const Jobs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Formula One": {
      jobTitle: "Design Engineer @",
      duration: "SEP 2019 - JUN 2020",
      desc: [
        "F1 in Schools, the only multi-disciplinary challenge in which teams of students deploy CAD/CAM software to collaborate, design, analyze, manufacture, test, and ultimately race miniature compressed air powered cars milled from an F1 model block.",
        "My goal was to produce an excellent body design which encompasses the virtual cargo while giving a sleek and unique design.",
        "My team and I raised over $14,000 over advertisements and by selling our team merch to cover all our manufacturing costs."
      ]
    },
    "Job Two": {
      jobTitle: "Research Developer @",
      duration: "SEPT 2019 - APR 2020",
      desc: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id bibendum purus. Aliquam sodales augue a faucibus dignissim. Suspendisse potenti.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo et dolor eleifend tempor in eget velit. Donec leo ligula, cursus vitae dignissim in, laoreet eget felis. Donec in."
      ]
    },
    "Job Three": {
      jobTitle: "Software Engineer @",
      duration: "SEPT 2019 - DEC 2020",
      desc: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo et dolor eleifend tempor in eget velit. Donec leo ligula, cursus vitae dignissim in, laoreet eget felis. Donec in."
      ]
    },
    "Job Four": {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo et dolor eleifend tempor in eget velit. Donec leo ligula, cursus vitae dignissim in, laoreet eget felis. Donec in.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tellus ex, vitae vestibulum ligula blandit pellentesque. Nullam tempor sit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tellus ex, vitae vestibulum ligula."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function(descItem, i) {
              return (
                
                <li key={i}>{descItem}</li>
                
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default Jobs;
