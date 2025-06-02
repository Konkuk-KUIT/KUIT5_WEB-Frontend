"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Count = ({ count }) => {
    return ((0, jsx_runtime_1.jsxs)(CountDiv, { children: [(0, jsx_runtime_1.jsxs)("div", { children: ["\uB9DE\uD78C \uAC1C\uC218 ", count, "/5"] }), (0, jsx_runtime_1.jsx)("div", { children: count === 5 ? "정답입니다!!" : "" })] }));
};
const CountDiv = styled_components_1.default.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
`;
exports.default = Count;
