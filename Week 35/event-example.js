window.addEventListener("load", async () => {
  const response = await fetch(
    "https://api.jsonbin.io/v3/qs/630dd9f3e13e6063dc922910"
  );

  const data = await response.json();
  console.log(data.record);

  data.record.forEach((name) => {
    console.log(name);
  });
});
