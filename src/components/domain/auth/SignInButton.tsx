export const SignInButton = () => {
  const handleClick = () => {
    // @see https://firebase.google.com/docs/auth/web/google-signin
  };

  return (
    <button onClick={handleClick} type="button" className="btn btn-primary normal-case min-w-60">
      Sign In With Google
    </button>
  );
};
