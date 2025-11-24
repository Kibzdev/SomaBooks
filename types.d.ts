interface Book {
  id: number;
  author:string; 
  genre:string; 
  rating:number;
  total_copies: number;
  title:string; 
  available_copies: number;
  description:string;
  color:string;
  cover:string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}