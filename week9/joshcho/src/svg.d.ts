// src/custom.d.ts 또는 svg.d.ts
declare module "*.svg" {
  const content: string;
  export default content;
}
