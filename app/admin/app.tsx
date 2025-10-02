"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./units/list";
import { UnitCreate } from "./units/create";
import { UnitEdit } from "./units/edit";
import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { ChallengeList } from "./challenges/list";
import { ChallengeCreate } from "./challenges/create";
import { ChallengeEdit } from "./challenges/edit";
import { ChallengeOptionList } from "./challengeOptions/list";
import { ChallengeOptionCreate } from "./challengeOptions/create";
import { ChallengeOptionEdit } from "./challengeOptions/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
        options={{ label: "Cursos" }}
      />
      <Resource
        name="units"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation="title"
        options={{ label: "Unidades" }}
      />
      <Resource
        name="lessons"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation="title"
        options={{ label: "Lecciones" }}
      />
      <Resource
        name="challenges"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation="question"
        options={{ label: "Desafíos" }}
      />
      <Resource
        name="challengeOptions"
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation="text"
        options={{ label: "Opciones por desafío" }}
      />
    </Admin>
  );
};

export default App;
