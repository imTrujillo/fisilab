import {
  BooleanInput,
  Edit,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Texto" />
        <BooleanInput source="correct" label="Opción correcta" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imgSrc" label="URL de imagen" />
      </SimpleForm>
    </Edit>
  );
};
