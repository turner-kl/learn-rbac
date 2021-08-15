import React, { FC } from "react";
import { check } from "../../check";
import rules from "../../rbac-rules";

type Props = {
  role: string;
  perform: string;
  data?: Object;
  yes?: Function;
  no?: Function;
};

/**
 * Permission を持っている actor の場合にのみ、子ノードを表示する
 */
const Permission: FC<Props> = ({
  children,
  role,
  perform,
  data,
  yes,
  no = () => null,
}) => {
  if (!check(rules, role, perform, data)) return no();
  if (yes) return yes();
  return children;
};

export default Permission;
