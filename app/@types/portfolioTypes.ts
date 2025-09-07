type TCategoryType = {
  title: string;
  description: string;
};

export type TPortfoliotype = {
  id: string;
  title: string;
  image: string;
  tabDescription: string;
  description: string;
  category: string;
  client: string;
  startDate: string;
  endDate: string;
  designer: string;
  livePreviewLink: string;
  sliderImages: string[];
  projectDescriptionTitle: string;
  projectDescription: string[];
  categoeys: TCategoryType[];
};
