export interface ISkils {
  id?: string;
  icons?: FileList;
  title: string;
  category: string;
  color: string;
  percentage: string;
}

export interface ISkilsResponse {
  message: string;
  error?: string;
  response: ISkils[];
}
export interface ISingleSkilsResponse {
  message: string;
  error?: string;
  response: ISkils;
}
