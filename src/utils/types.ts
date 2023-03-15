export interface Iingredient {
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

export interface IingWithKey {
    key: string,
    item: Iingredient
}

export interface Ilocation {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: {} | null

}