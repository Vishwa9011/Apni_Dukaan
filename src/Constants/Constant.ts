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
     timeStamp: object
}

//* Single Product
export interface IProduct {
     id: string 
     brand: string
     description: string
     rating: number
     totalReview: string
     price: number
     mrp: number
     discount?: number
     category: string
     defaultImage: string
     qty?: number
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


export interface IAuthDetailLogin {
     email: string
     password: string
     Toast: Function
     navigate: Function
     location: any
}

export interface IToastProps {
     Toast: (msg: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined) => void
}