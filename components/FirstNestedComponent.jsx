
export default function FirstNestedComponent({ nestedContent = "I am the main", mainContent = "I am the nested" }) {
  return (
    <div className={`my-component`}>
      {nestedContent}

      <MyComponentBaseCorrect mainContent={mainContent} />
    </div>
  );
}
