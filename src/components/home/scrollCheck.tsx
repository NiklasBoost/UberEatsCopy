function checkScrollLevel(numb: number, ifBranch: () => void, elseBranch: () => void) {
  const currentScrollLevel = window.pageYOffset;
  // console.log(currentScrollLevel);
  if(currentScrollLevel > numb) {
    ifBranch();
  } else {
    elseBranch();
  }
}

export default checkScrollLevel;