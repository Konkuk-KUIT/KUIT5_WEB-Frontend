import { react,useState } from "react";

import { CardImage } from "./Cards_style";

function Cards({card,isFlipped,onClick}){
    return(
        <CardImage
            src={isFlipped? card.imgfront: card.imgback}
            alt={card.name}
            onClick={onClick}
        />
    );
}

export default Cards;