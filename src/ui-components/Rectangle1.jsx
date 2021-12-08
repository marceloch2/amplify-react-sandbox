/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Rectangle1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="399px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="412px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        top="0px"
        left="0px"
        width="399px"
        position="absolute"
        height="412px"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
    </View>
  );
}
