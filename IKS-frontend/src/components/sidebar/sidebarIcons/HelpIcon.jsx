import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default () => {
  return (
    <SvgIcon
      color="inherit"
      viewBox="0 0 20 20"
      style={{ width: 20, height: 20 }}
      fontSize="small"
    >
      <path d="M9 16h2v-2H9v2zm1-16C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14C7.79 4 6 5.79 6 8h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
    </SvgIcon>
  );
};
