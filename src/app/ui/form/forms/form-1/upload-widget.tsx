"use client";
import { Fab } from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";
import { UseFormSetValue } from "react-hook-form";

type Prop = {
  readonly setValue: UseFormSetValue<{
    firstName: string;
    lastName: string;
    state: string;
    country: string;
    pinCode: string;
    phone: string;
    email: string;
    jobTitle: string;
    aboutMe: string;
    photo: string | undefined;
  }>;
};
export default function CloudinaryUploader({ setValue } : Prop) {
  const handleSuccess = (result) => {
    console.log("Uploaded:", result.info.secure_url);
    setValue("photo", result.info.secure_url, { shouldValidate: true });
  };

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
      onSuccess={handleSuccess}
    >
      {({ open }) => (
        // <button onClick={() => open()} type='button'>Upload Image</button>
        <Fab variant="extended" size="small" type="button" onClick={() => open()}>
          Upload Image
        </Fab>
      )}
    </CldUploadWidget>
  );
}
