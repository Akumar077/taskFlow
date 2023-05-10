import { makeStyles } from "@material-ui/core/styles";

export const useCustomStyles = () => {
  const useStyles = makeStyles({
    switchBase: {
      color: "#ECEEF2",
      "&$checked": {
        color: "#2196f3",
      },
      "&$checked + $track": {
        backgroundColor: "#2196f3",
      },
    },
    checked: {},
    track: {},
  });

  return useStyles();
};
