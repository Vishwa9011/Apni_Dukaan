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
     id?: string
     brand: string
     description: string
     rating: string
     totalReview: string
     price: number
     mrp: number
     discount?: number
     category: string
     defaultImage: string
     images: {
          image1: string
          image2?: string
          image3?: string
     }
}

//* Single Product
export interface IProductUpdate {
     id: string
     brand?: string
     description?: string
     rating?: string
     totalReview?: string
     price?: number
     mrp?: number
     discount?: number
     category?: string
     defaultImage?: string
     images?: {
          image1?: string
          image2?: string
          image3?: string
     }
}
