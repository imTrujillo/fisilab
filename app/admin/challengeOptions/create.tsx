import {
  BooleanInput,
  Create,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Texto" />
        <BooleanInput source="correct" label="Opción correcta" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imgSrc" label="URL de imagen" />
      </SimpleForm>
    </Create>
  );
};
