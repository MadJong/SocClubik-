

export type PostItem = {
    nickName: string
    ms: string
} 
export type ProfilType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType 
    photos: PhotosType
  }
 export type PhotosType = {
      small: string | null
      large: string | null
  }
   export type ContactsType = {
      github: string | null
      vk: string | null
      facebook: string | null
      instagram: string | null
      twitter: string | null
      website: string | null
      youtube: string | null
      mainLink: string | null
    }

    export type UserType = {
        id: number
        name: string
        status: string
        photos: PhotosType
        followed: boolean
    }