## Dynamic Json Schema Forms.


 This program will iterate over a JSON schema located in the schema folder and convert into a dynamic form using React


  The bulk of the logic is inside Input.js, this is given the values from the schema, and it decides what shape to make out of them. 

   If you want to change the schema you must include a top level key for your new field, and the only required fields are 
   
   ```
    title: :: string,
    required: :: bool, 
    type: :: string (to match HTML 5 input types),
    ```

To run the program first install dependencies with `npm i` you can then use `npm run start` to run. 



This was bootstrapped with Create-react-app 