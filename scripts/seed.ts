import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: "Física I", imgSrc: "/logo.png" },
      { id: 2, title: "Física II", imgSrc: "/logo.png" },
      { id: 3, title: "Física III", imgSrc: "/logo.png" },
      { id: 4, title: "Física IV", imgSrc: "/logo.png" },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unidad 1",
        description: "Aprende los fundamentos de la física",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Fuerza",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Electromagnetismo",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Electricidad",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Fluidos",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Movimiento",
        order: 5,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "¿Cuál es la formula de la fuerza?",
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: "sinonimo de la explosión",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: "¿Como te ha ido?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imgSrc: "/logo.png",
        correct: true,
        text: "ma",
      },
      {
        id: 2,
        challengeId: 1,
        imgSrc: "/logo.png",
        correct: false,
        text: "m/a",
      },
      {
        id: 3,
        challengeId: 1,
        imgSrc: "/logo.png",
        correct: false,
        text: "mm",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 4,
        challengeId: 2,
        correct: true,
        text: "detonacion",
      },
      {
        id: 5,
        challengeId: 2,
        correct: false,
        text: "kaboom",
      },
      {
        id: 6,
        challengeId: 2,
        correct: false,
        text: "caramba",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 4,
        challengeId: 3,
        correct: true,
        text: "bien",
      },
      {
        id: 5,
        challengeId: 3,
        correct: false,
        text: "normal",
      },
      {
        id: 6,
        challengeId: 3,
        correct: false,
        text: "humilde",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: "¿Cuál es la formula de la fuerza?",
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: "sinonimo de la explosión",
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: "¿Como te ha ido?",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
