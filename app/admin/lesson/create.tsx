import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const LessonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Título" />
        <ReferenceInput source="unitsId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Orden" />
      </SimpleForm>
    </Create>
  );
};
