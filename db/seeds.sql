INSERT INTO cohorts(name, admin, password)
VALUES
  ('diamonds', 'Bobby', 'diamonds'),
  ('pearls', 'Jason', 'pearls'),
  ('supers', 'Tom', 'supers');

INSERT INTO topics(name, cohort_id)
VALUES
  ('Ruby', 1),
  ('Rails', 1),
  ('Javascript', 1),
  ('React', 1),
  ('Big O', 1),
  ('Express', 1),
  ('SQL', 1),
  ('NoSQL', 1);

INSERT INTO students(name, password, cohort_id)
VALUES
  ('student1', '123', 1),
  ('student2', '123', 1),
  ('student3', '123', 1),
  ('student4', '123', 2);

INSERT INTO teachers(name, password, cohort_id)
VALUES
  ('teacher1', '123', 1),
  ('teacher2', '123', 2),
  ('teacher3', '123', 3),
  ('teacher4', '123', 3);

-- INSERT INTO notes(title, content, topic_id, student_id)
-- VALUES
--   ('Bobby Ruby calss', '{"BobbyClass": "This are the notes from Bobbys first Ruby class"}', 1, 1),
--   ('10/2 Ruby calss 1', '{"keyofnote": "First ruby notes"}', 1, 2),
--   ('Javascript 101', '{"keytwo": "JS and jquery"}', 2, 2);
