
export interface StateTypes {
  isUserLoggedIn:boolean,
  error:string,
  loading:boolean,
  user:{
    status?:string,
    user?:{
      name?:string,
      email?: string,
      id?: string,
      lastname?:string,
      friends?:string,
    }
  }
}

export interface ActionType {
  type:string,
  payload: StateTypes
}



