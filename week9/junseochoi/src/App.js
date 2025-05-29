"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Count_1 = __importDefault(require("./components/Count/Count"));
const Card_1 = __importDefault(require("./components/Card/Card"));
const ResetBtn_1 = __importDefault(require("./components/ResetBtn/ResetBtn"));
const CardList_1 = __importDefault(require("./models/CardList"));
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    const [cardList, setCardList] = (0, react_1.useState)([...CardList_1.default]);
    const [flipped, setFlipped] = (0, react_1.useState)(Array(cardList.length).fill(false));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Count_1.default, { count: count }), (0, jsx_runtime_1.jsx)("section", Object.assign({ style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    padding: "20px",
                } }, { children: (0, jsx_runtime_1.jsx)(Card_1.default, { count: count, setCount: setCount, cardList: cardList, flipped: flipped, setFlipped: setFlipped }) })), (0, jsx_runtime_1.jsx)(ResetBtn_1.default, { cardList: cardList, setCardList: setCardList, flipped: flipped, setFlipped: setFlipped, setCount: setCount })] }));
}
exports.default = App;
