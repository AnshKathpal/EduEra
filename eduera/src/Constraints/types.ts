export interface University {
        id: number;
        year_of_establishment : number;
        name: string;
        country: string;
        faculty: number;
        students: number;
        courses: number;
        images: string;
        flag: string;
        ownership: string;
        rating: string;
        place: string;
        category: string;
        brochure:string;
}


export interface newUniversity {
    id: number;
    year_of_establishment : number;
    name: string;
    country: string;
    faculty: number;
    students: number;
    courses: number;
    images: string;
    flag: string;
    ownership: string;
    rating: string;
    place: string;
    category: string;
    brochure:string;
}


export interface Programs {
    id : number;
    image : string;
    programName : string;
    degree : string;
    university : string;
    country : string;
    programType : string;
    duration : string;
    fees : string;
    startMonth : string;
}

export interface LoginData {
    username: string,
    email : string,
    password: string
  }