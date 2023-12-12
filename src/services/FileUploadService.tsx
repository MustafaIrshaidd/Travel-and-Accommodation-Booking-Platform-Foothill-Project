// const createFormData = (formDataValues: any, fileToUpload?: File) => {
//   let formData = new FormData();

//   if (fileToUpload) formData.append("image", fileToUpload);

//   for (let [key, value] of Object.entries(formDataValues)) {
//     formData.append(key, value as string | Blob);
//   }

//   return formData;
// };

const createFormData = (fileToUpload?: File) => {
  let formData = new FormData();

  if (fileToUpload) formData.append("image", fileToUpload);

  return formData;
};

const FileUploadService = {
  createFormData,
};

export default FileUploadService;
