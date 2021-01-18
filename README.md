# resident-test-task

**Versions**: node v14.15.3, npm 6.14.9

1. Install dependencies: **npm install**

1. Start project: **npm run start**

---

The web application has three main components: `Main`, `Header`, and `Modal`.
The `Main` component is used to display the selected filters to the user with the ability to clear all or one filter (using the button with a cross). The logic for displaying an array of applied filters is split between the `SetOfFilters` component, which simply takes a group of filters of the same type and displays the `SelectedFilterItem` components that are used to display one selected filter.
The `Header` component that displays the application header and logo. It displays a set of buttons for different types of filters. These buttons trigger a modal display when pressed.
The `Modal` component contains all the logic of the modal window. Modal mode is different for mobile and PC viewing. The `ButtonsBlock` component contains logic that is reused to display buttons in the `FilterItem` and `Modal` components. The `FilterItem` component is used to render filters for mobile devices. Each `FilterItem` component is responsible for only one type of filter. `FilterItem` can be closed and opened. `Modal` is closed when the user clicks Cancel or Apply, or outside of Modal.

## Also the app contains tests for components

Tools used:

>

**react, redux, redux-toolkit, styled-components**
