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

-- Application Idea: Indoor Plants care guide
Application to store care instructions for the indoor plants


-- Data Design proposal:

		Category:
			-  Orchids
			-  Violets
			-  Ferns
			-  Aroid

		Name of the Plant:


		Care Instructions:
			-  Water
			-  Light
			-  Fertilizer
			-  Problems
			-  Notes


		
	
-- UI Design proposal:


- Form with one drop down box to select category
- Input text area to enter name of the plant
- Input area to enter Water care instructions
- Input area to enter Light care instructions
- Input area to enter Fertilizer care instructions
- Input area to enter notes

Four buttons: 1: submit data entered in the form to the local storage; 
			  2: retrieve data fro local storage based on the key elements (category and plant name).  Retrieve => populate the following fields: care instrutions for water, light and etc...
			  3: update data and submit to local storage. Category and plant name are not updatable
			  4: delete data. Remove record from local storage


Things to figure out:
		- How to work with local storage. How to create keys
		- How to populate drop down with list of elements
		- How to work with drop downs
		- How to create and works with form 
