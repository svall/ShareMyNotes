BEGIN;

DROP TABLE IF EXISTS cohorts;
DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS teachers;

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  admin VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  cohort_id INT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  content JSON,
  topic_id INT NOT NULL,
  student_id INT,
  teacher_id INT,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  cohort_id INT NOT NULL
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  cohort_id INT NOT NULL
);

ALTER TABLE ONLY notes
    ADD CONSTRAINT notes_student_id_fkey
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY notes
    ADD CONSTRAINT notes_teacher_id_fkey
    FOREIGN KEY (teacher_id)
    REFERENCES teachers(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY notes
    ADD CONSTRAINT notes_topic_id_fkey
    FOREIGN KEY (topic_id)
    REFERENCES topics(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY students
    ADD CONSTRAINT students_cohort_id_fkey
    FOREIGN KEY (cohort_id)
    REFERENCES cohorts(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY teachers
    ADD CONSTRAINT teachers_cohort_id_fkey
    FOREIGN KEY (cohort_id)
    REFERENCES cohorts(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

ALTER TABLE ONLY topics
    ADD CONSTRAINT topics_cohort_id_fkey
    FOREIGN KEY (cohort_id)
    REFERENCES cohorts(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE;

COMMIT;
