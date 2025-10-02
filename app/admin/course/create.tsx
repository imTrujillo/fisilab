import { Create, required, SimpleForm, TextInput } from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Título" />
        <TextInput
          source="imgSrc"
          validate={[required()]}
          label="URL de Imagen"
        />
      </SimpleForm>
    </Create>
  );
};
