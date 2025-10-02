import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Título" />
        <TextInput source="imgSrc" validate={[required()]} label="ImagenSRC" />
      </SimpleForm>
    </Edit>
  );
};
