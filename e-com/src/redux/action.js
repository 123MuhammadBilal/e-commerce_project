export const onSubmission = (user) => {
  return{
      type: 'onSubmission',
      user: {user}
  }
}