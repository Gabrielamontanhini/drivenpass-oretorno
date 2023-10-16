export type User = {
    id: number,
    email: string,
    password: string
}


export type SignInOrCreateUser = Pick<User, 'email' | 'password'>;


export type CreateUser = Omit<User, 'id'>

export type UserProfile = Omit<User, 'password'>

export type Credentials = {
    id: number,
    user: number,
    credIdentifier: string,
    url: string,
    username: string,
    password: string
}

export type CreateCredential = Omit<Credentials, 'id' | 'user'>

export type Sessions = {
    id: number,
    userId: number,
    token: string
}

export type CreateSession = Omit<Sessions, 'id'>

export type ApplicationError = {
    name: string;
    message: string;
  };
  

  export type RequestError = {
    status: number;
    data: object | null;
    statusText: string;
    name: string;
    message: string;
  };
  
 
  export type SignInResult = {
    userId: number;
    userEmail: string
    token: string;
  };
  