
export default function MyComponentBaseCorrect({ mainContent = "Hello world" }) {
  return (
    <div className={`my-component-base `}>
      {mainContent}

    </div>
  );
}
