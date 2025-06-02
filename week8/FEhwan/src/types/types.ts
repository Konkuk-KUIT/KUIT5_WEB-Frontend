export type storeList = {
    id: number
    rank: number
    name: string
    category: string
    rating: number
    reviews: number
    time: string;
    deliveryTime: string
    deliveryFee: number
    minOrder: number
    purMethod: string
}

export type foodCategory = {
    name: string
    image: string
}

export type storeMenu =
    {
        name: string
        isBest: boolean
        price: number
        ingredients: string
    }

export type cartItem =
    {
        id:number
        name: string
        price: number
        ingredients: string
        count: number
    }