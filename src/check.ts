import { Rule } from "./rbac-rules";


/**
 * 
 * @param rules - ルールテーブル情報
 * @param role - 当該actorの持つ権限役割
 * @param action - どの振る舞いか
 * @param data - dynamic permissionに渡すデータ
 * @returns 
 */
export const check = (
  rules: Rule,
  role: string,
  action: string,
  data?: Object
): Boolean => {
  const permissions = rules[role];
  if (!permissions) return false;

  const staticPermissions = permissions.static;
  if (staticPermissions && staticPermissions.includes(action)) return true;

  const dynamicPermissions = permissions.dynamic;
  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) return false;
    return permissionCondition(data);
  }

  return false;
};
