//* singleUser
export interface IUser {
     uid: string
     username: string
     email: string
     password: string
     photoURL: string
     phoneNumber: number
     googleAuth: boolean
     isActive: boolean
     isAdmin: boolean
     gender: string
     address: string
}

//* Single Product
export interface IProduct {
     images: string[]
     title: string
     description: string
     rating: {
          rating: number
          totalRatings: string
     }
     price: number
     mrp: number
     discount?: number
     category: string
     size: string
}
