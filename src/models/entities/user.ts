export interface User {
    email: string
    name: string
    meta: UserMeta
}

export interface UserMeta {
    [key: string]: string
}
