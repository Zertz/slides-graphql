// @flow
import React, { PureComponent } from "react";
import classnames from "classnames";

type Props = {
  children: any,
  className: string
};

class Slide extends PureComponent<Props> {
  render() {
    const { children, className } = this.props;

    return <section className={classnames(className)}>{children}</section>;
  }
}

export default Slide;
