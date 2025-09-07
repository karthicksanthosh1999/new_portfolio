export interface IExperience {
  id?: string;
  title: string;
  location: string;
  year: string;
  experienceType: string;
  experience?: string;
}

export interface IExperiencesResponse {
  message: string;
  error?: string;
  response: IExperience[];
}
export interface ISingleIExperiencesResponse {
  message: string;
  error?: string;
  response: IExperience;
}
