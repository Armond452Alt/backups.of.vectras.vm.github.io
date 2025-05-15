import { Index } from "@upstash/vector"

const index = new Index({
  url: "https://communal-mammal-57137-us1-vector.upstash.io",
  token: "ABkFMGNvbW11bmFsLW1hbW1hbC01NzEzNy11czFhZG1pbk1qbGhNalUxTkRNdE5tSTBNeTAwTmpJNUxXSXlNbU10TW1NMU9UQTFNMlZrWlRkbA==",
})

await index.upsert({
  id: "id1",
  data: "Enter data as string",
  metadata: { metadata_field: "metadata_value" },
});

await index.query({
  data: "Enter data as string",
  topK: 1,
  includeVectors: true,
  includeMetadata: true,
});