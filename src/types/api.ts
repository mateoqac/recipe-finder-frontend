// Generated by https://app.quicktype.io

export type APIRecipeResponse = {
  data: Recipe[];
  meta: Meta;
}

export type Meta = {
  total_pages:  number;
  current_page: number;
}

export type Recipe = {
  id:          number;
  title:       string;
  cook_time:   number;
  prep_time:   number;
  ingredients: string[];
  ratings:     number;
  cuisine:     string;
  category:    string;
  author:      string;
  image:       string;
  created_at:  Date;
  updated_at:  Date;
}
