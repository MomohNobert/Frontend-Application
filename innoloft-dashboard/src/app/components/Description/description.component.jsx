function Description({ description }) {
  const desc = {__html: description}
  return <p dangerouslySetInnerHTML={desc} />;
}

export default Description;
