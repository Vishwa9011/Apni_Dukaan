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
     address?: IAddress 
     timeStamp: number
}

// * updateuser interface
export interface IUserProfileUpdate {
     gender: string,
     username: string,
     phoneNumber: number
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

// todo: auth args interface for action.auth
export interface IAuthDetailLogin {
     email: string
     password: string
     Toast: Function
     navigate: Function
     location: any
}

// todo: taost interface
export interface IToastProps {
     Toast: (msg: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined) => void
}

// todo: address interface
export interface IAddress {
     name: string
     state: string
     phone: number
     pincode: number
     address: string
     locality: string
     district: string
     addressType: string
}



// todo: Product order
export interface IOrdersProduct extends IProduct {
     orderedAt: number;
     orderID: string;
     ownerInfo: {
          email: string,
          ownerName: string,
          address: IAddress
     }
     deliveryStatus: 'PENDING' | 'DELIVERED'
}