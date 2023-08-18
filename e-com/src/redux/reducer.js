const currentUser = [];
const onForm = (state = currentUser, action) => {
  switch (action.type) {
    case "onAddTask":
      return [action.query?.query];


    default:
      return state;
  }
};
export default onForm;