// src/global.d.ts 또는 src/types/css.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.css";
