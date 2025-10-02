import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Título" />
        <TextInput
          source="description"
          validate={[required()]}
          label="Descripción"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="Orden" />
      </SimpleForm>
    </Create>
  );
};
