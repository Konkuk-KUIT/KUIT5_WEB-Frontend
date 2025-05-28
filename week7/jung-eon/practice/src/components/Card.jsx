export default function Card({ name, age }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 10,
        width: 120,
      }}
    >
      <p>
        <strong>이름:</strong> {name}
      </p>
      <p>
        <strong>나이:</strong> {age}
      </p>
    </div>
  );
}
