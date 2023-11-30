<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


<h1> How to Set Up and Run the Project -- Task Manager </h1>

<p> Steps: </p>
<ol>
    <li>Create a blank document in your Desktop. </li>
    <li>Open the folder in the VS Code. </li>
    <li>Open the terminal in the VS Code. </li>
    <li>Run the following Commands in the terminal.</li>
</ol>

    ```
    
    git clone https://github.com/nehalgarg7/Task-Manager.git
    cd Task-Manager 
    npm i 
    ```
** To run the project **
   ```

   npm run start
   ```

![Project Structure](https://i.postimg.cc/sfLX0X1B/Screenshot-2023-11-30-150616.png)

<h5>Project Structure</h5>

**components** - Include all the react components. <br>
**context** - It provide the context of the task to the whole project. Also, stroing the task in the localstorage.<br>
**css**- It include all the css files for the pages and components.<br>
**images** - It include all the necessary image files.<br>
**pages** - It include all the necesaary pages.<br>

<h4>Project Explaination</h4>
![Home-Page-UI](https://i.postimg.cc/rFJQ1vfw/Screenshot-2023-11-30-161647.png)
After building the project. The home page should be render.

**On Add Task Click**
![Add-Task Page](https://i.postimg.cc/VNRCp8bJ/Screenshot-2023-11-30-161657.png)
The Add Task Page Should be open.

**Add Task Button Click**
![Add-Task-Button-Click](https://i.postimg.cc/2jvZNhvp/Screenshot-2023-11-30-161704.png)<br>
-The Modal should be open. Providing the feature to add Task Name, Description and to set Priority. <br>
![New Task Details Filled](https://i.postimg.cc/RhM6Tb0c/Screenshot-2023-11-30-161822.png)<br>
-On click of Close. The Modal should be close. And it should keep on the Add Task page only. <br>
-On click of Save Changes. The Modal should be close. And You should get rendered to Home Page. Adding the New Task to the table. <br>
![New-Task-Added](https://i.postimg.cc/m2HVqPZh/Screenshot-2023-11-30-161831.png)<br> <br>

**Edit Task Button Click** <br>
On click of Edit Task button you must get rendered to Edit Page.<br>
![Edit Page](https://i.postimg.cc/2yzGBGRt/Screenshot-2023-11-30-161846.png)<br>
On click of Edit Task Button Click - <br>
A Modal should be open with existing value in the input boxes.<br>
![Edit Modal Open](https://i.postimg.cc/Zn78vhL9/Screenshot-2023-11-30-161852.png)<br>
-On click of Close. The Modal should be close. And it should keep on the Add Task page only. <br>
-On click of Save Changes. The Modal should be close. And You should get rendered to Home Page. Adding the Edited Task to the table. <br>

**About Page**
On click of About. You should get rendered to About Page.
![About Page](https://i.postimg.cc/fR432Lkz/Screenshot-2023-11-30-161916.png)<br>