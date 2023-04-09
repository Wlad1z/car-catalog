export interface ICar {
    
    image: string
    name: string
    price: string
}

export interface ICarData extends Omit<ICar, 'id'> {}