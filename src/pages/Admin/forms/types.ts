export interface AddCityFormValues {
  name: string;
  description: string;
}

export interface AddCityFormProps {
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