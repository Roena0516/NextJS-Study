export default async function ListItem() {
  return (
    <html>
      <body>
        <button
          onClick={() => {
            fetch("/api/post/delete", {
              method: "POST",
              body: item._id,
            });
          }}
        >
          🗑️
        </button>
      </body>
    </html>
  );
}
