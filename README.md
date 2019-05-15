# hrext09-my-cruddy-app
Create Read Update and Delete framework using JS

 ## Tasks

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...

-- Application Idea: Teenage boys care guide for Moms
Application for Moms to share their tips on handling different type of situations arising while raising teenage boys

-- Data Design proposal:

		Category:
			-  School
			-  Job/Money
			-  Driving/Cars
			-  Clothes/Shoes
			-  Food
			-  Friends/Relationships
			-  Late nights out
			-  Hygiene



		Care Tips:
			-  Short description of Situation
			-  Care Tip
			-  Constraints
			-  Possible side effects


		Note to Self:

	
-- UI Design proposal:


- Form with one drop down box to select category
- Input text area to enter short description of situation
- Input area to enter Care Tip
- Input area to enter Constraints
- Input area to enter possible side effects
- Input area to enter notes

Four buttons: 1: submit data entered in the form to the local storage; 
			  2: retrieve data fro local storage based on the key elements (category and situation description).  Retrieve means populate the following fields: care tip, constraints, side effects and notes
			  3: update dataand submit to local storage. Category and situation are not updatable
			  4: delete data. Remove record from local storage


Things to figure out:
		- How to work with local storage. How to create keys
		- How to populate drop down with list of  elements
		- How to work with drop downs
		- How to create and works with form 
