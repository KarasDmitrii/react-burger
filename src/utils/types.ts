export interface IIngredient {
    _id: string,
    name: string,
    type: string,
    fat: string,
    carbohydrates: string,
    proteins: string,
    calories: string,
    price: string,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

export interface IIngWithKey {
    key: string,
    item: IIngredient
}

export interface ILocation {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: {} | null

}

export interface IPromise {
    "success": boolean,
    "data"?: Array<IIngredient>,
    "message"?: string,
    "accessToken"?: string,
    "refreshToken"?: string,
    "user"?: {"email": string, "name": string}, 
    "status": number
}