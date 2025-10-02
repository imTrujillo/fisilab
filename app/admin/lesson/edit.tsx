import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Título" />
        <ReferenceInput source="unitsId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Orden" />
      </SimpleForm>
    </Edit>
  );
};
