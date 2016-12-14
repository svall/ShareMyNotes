# ShareMyNotes

## **Concept:** 
The app is a tool for students and teachers to centralize and share notes. It is a way for students to take notes during class, and for other students to have access to them. It solves a problem for students who miss a day of class or are not able to take notes during class. It also provides a controlled platform for teachers to review notes their students are basing their homework on, in case there are any errors or specific topics that are not being understood correctly. 

## **Technologies:**
1. React.js and Draft.js: I want to build the app with Draft.js in React. It is a framework built by Facebook for React that lets users set up a customizable text editor in the browser. It is possible to save the information in JSON format to be stored in a database. 
2. Node and express server.
3. PSQL: the app will have user authentication and tables for Cohorts, Topics and Notes. The database needs to have a set structure.

## **User Stories:**
1. Teachers: teachers have the ability as admins to create a Cohort and set up a list of Topics for that Cohort. They can also create Notes under a specific topic for students to see. They can access all notes from all topics to review them and edit them.

2. Students: students can log into their Cohort and take notes on the app during class. They can save the notes and other students from that same Cohort will be able to see those notes as well. Students can also search through the Topics in their Cohort and look over other notes. 

## **Wireframe:**
![screen shot 2016-12-06 at 10 59 12 pm](https://git.generalassemb.ly/storage/user/45/files/ac97e336-bc07-11e6-9b57-191d6989de7c)


## **Timetable:**
- Dec-7: planning db setup (schema) & mock test Draft.js 
- Dec-8: set up webpack & server (basic skeleton)
- Dec-9: db, set up users & specific routes
- Dec-10: set up Draft.js
- Dec-11: Notes CRUD 
- Dec-12: Notes CRUD functional
- Dec-13: Test functionality
- Dec-14: debugging & styling

## **Key Challenges:**
- Using a different framework (Draft.js) with React.js
- Setting up the Schema correctly with multiple cross-reference tables

## **ERD:**
![img_6788](https://git.generalassemb.ly/storage/user/45/files/d60945d0-bbcf-11e6-864a-b63477055f4f)
