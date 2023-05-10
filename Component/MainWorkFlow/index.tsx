"use client";
import React, { useReducer } from "react";
import cx from "classnames";

import { Button, Divider, FormControlLabel, Switch } from "@material-ui/core";
import { useCustomStyles } from "@/hooks/useStyles";
import SvgComponent from "@/asserts/Add";
import styles from "./style.module.scss";
import "../../styles/_colors.scss";
import CrossButton from "../../asserts/cross";

const initialState = [
  {
    label: "Git Checkout",
    key: 1,
    isSelected: true,
    isModificationNotAllowed: false,
    isCrossButton: false,
  },
  {
    label: "Code Analysis",
    key: 2,
    isSelected: false,
    isModificationNotAllowed: true,
    isCrossButton: false,
  },
  {
    label: "Credential Scan",
    key: 3,
    isSelected: false,
    isModificationNotAllowed: true,
    isCrossButton: false,
  },
  {
    label: "Docker Build",
    key: 4,
    isSelected: true,
    isModificationNotAllowed: false,
    isCrossButton: false,
  },
  {
    label: "Docker Image Scan",
    key: 5,
    isSelected: false,
    isModificationNotAllowed: true,
    isCrossButton: false,
  },
  {
    label: "Docker Push",
    key: 6,
    isSelected: true,
    isModificationNotAllowed: false,
    isCrossButton: false,
  },
];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "select":
      const index1 = state.findIndex(
        (item: any) => item.key === action.payload
      );
      if (index1) {
        const item = { ...state[index1] };
        item.isSelected = true;
        const prevState = [...state];
        prevState[index1] = item;
        return prevState;
      }
      return state;
    case "de-select":
      const index2 = state.findIndex(
        (item: any) => item.key === action.payload
      );
      if (index2) {
        const item = { ...state[index2] };
        item.isSelected = false;
        const prevState = [...state];
        prevState[index2] = item;
        return prevState;
      }
      return state;
    case "add-new":
      const index3 = state.findIndex(
        (item: any) => item.key === action.payload
      );

      if (index3 !== -1) {
        const item = {
          label: "Untitled script",
          key: state.length + 1,
          isSelected: true,
          isModificationNotAllowed: false,
          isCrossButton: true,
        };
        const prevState = [...state];
        prevState.splice(index3 + 1, 0, item);
        return prevState;
      }
      return state;

    case "delete":
      const index4 = state.findIndex(
        (item: any) => item.key === action.payload
      );
      if (index4 !== -1 && state[index4].isCrossButton) {
        const prevState = [...state];
        prevState.splice(index4, 1);
        return prevState;
      }
      return state;
    default:
      throw new Error();
  }
};

export const GivenComponent = () => {
  const [workFlow, dispatch] = useReducer(reducer, initialState);

  const classes = useCustomStyles();

  const onSelect = (key: any) => {
    dispatch({ type: "select", payload: key });
  };

  const onDeselect = (key: any) => {
    dispatch({ type: "de-select", payload: key });
  };

  const onAddNew = (key: any) => {
    dispatch({ type: "add-new", payload: key, isCrossButton: true });
  };

  const onDelete = (key: any) => {
    dispatch({
      type: "delete",
      payload: key,
    });
  };

  const getTop = (workFlow: any, index: any) => {
    // return 0;
    let i = index + 1;
    while (i < workFlow.length) {
      if (workFlow[i].isSelected) {
        const indexDiff = i - index;

        const prevButtonHeight = (index + 1) * 44;
        const prevMargin = index * 40;
        const buttonHalfHeight = 11;

        const buttonTotalHeight = (indexDiff - 1) * 44;
        const totalMargin = indexDiff * 40;

        return (
          prevButtonHeight +
          prevMargin -
          buttonHalfHeight +
          (buttonTotalHeight + totalMargin) / 2
        );
      }
      i++;
    }

    return 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.buildConfig}>
        <h1>Build Config</h1>
        <span className={styles.mainButton}>
          <Button
            variant="outlined"
            style={{
              border: "2px soild #ECEEF2",
              background: "#ffffff",
              borderRadius: "8",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0496FF",
              color: "#ffffff",
              borderRadius: "8",
            }}
          >
            Save
          </Button>
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.taskFlow}>
          <h2 style={{}} className={styles.taskFlowHeading}>
            Task Flow
          </h2>

          <div className={styles.button}>
            {workFlow.map((item: any, index: Number) => {
              return (
                <div key={item.key}>
                  <Button
                    variant="outlined"
                    startIcon={!item.isSelected && <SvgComponent />}
                    endIcon={
                      item.isCrossButton && (
                        <CrossButton
                          key={item.key}
                          onClick={() => {
                            onDelete(item.key);
                          }}
                          className={styles.crossIcon}
                          style={{}}
                        />
                      )
                    }
                    style={{
                      transform: `translateX(${
                        item.isSelected ? 0 : "-160px"
                      })`,
                      color: `${item.isSelected ? "black" : "#0496FF"}`,
                      borderColor: `${item.isCrossButton ? "#0496FF" : ""}`,
                      marginTop: `${!index ? 0 : 10}`,
                      marginBottom: `${index === workFlow.length - 1 ? 0 : 10}`,
                    }}
                    key={item.key}
                    onClick={() => {
                      if (!item.isSelected) {
                        onSelect(item.key);
                      }
                    }}
                    className={
                      item.isCrossButton
                        ? cx(styles.crossButton, styles.nonCrossButton)
                        : styles.nonCrossButton
                    }
                  >
                    {item.label}
                  </Button>

                  {index !== workFlow.length - 1 && item.isSelected ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 1,
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: `${getTop(workFlow, index)}px`,
                      }}
                    >
                      <SvgComponent
                        style={{
                          cursor: "pointer",
                          backgroundColor: "#ffffff",
                          borderRadius: "50%",
                        }}
                        key={item.key}
                        onClick={() => {
                          onAddNew(item.key);
                        }}
                      >
                        <Divider orientation="vertical" />
                      </SvgComponent>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.securityChecks}>
          <h2 style={{ paddingBottom: "20px" }}>Security Checks</h2>
          <Divider />
          {workFlow
            .filter((item: any) => item.isModificationNotAllowed)
            .map((item: any, index: Number) => (
              <>
                <FormControlLabel
                  key={item.key}
                  control={
                    <Switch
                      checked={item.isSelected}
                      onChange={() => {
                        if (item.isSelected) {
                          onDeselect(item.key);
                        } else {
                          onSelect(item.key);
                        }
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                      color="default"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.checked,
                        track: classes.track,
                      }}
                    />
                  }
                  label={item.label}
                />
                <Divider />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
