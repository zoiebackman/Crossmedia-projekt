export async function getJsonInformation(jsonFile) {
  const file = jsonFile;
  const json = await Deno.readTextFile(file);
  const jsonArray = JSON.parse(json);

  return jsonArray;
}
