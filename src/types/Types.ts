
export interface ErrorTypes {
    status?:string,
    user?:string
}

export interface DataTypes {
    status?:string,
    user?:{
        name?:string,
        email?: string,
        id?: string,
        lastname?:string
    }
}


  
  type SetErrFunction = React.Dispatch<React.SetStateAction<ErrorTypes>>;
  type SetDataFunction = React.Dispatch<React.SetStateAction<DataTypes>>;
  
export type HandleCheckType = (
    data: DataTypes,
    setErr: SetErrFunction,
    setData: SetDataFunction
  ) => void;
  