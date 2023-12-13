export interface AddCityInfoValues {
  name: string;
  description: string;
}

export interface AddCityInfoProps {
  namePlaceholder?: string;
  descriptionPlaceholder?: string;
  onSubmitInformer?: () => void;
}

export interface AddCityImageProps {
  namePlaceholder?: string;
  descriptionPlaceholder?: string;
  onSubmitInformer?: () => void;
}

export interface AddCityImageValues {
  image: File | undefined;
  previewImage: string;
}