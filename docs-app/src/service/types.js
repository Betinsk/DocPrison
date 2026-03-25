const entityDocs = import.meta.glob("../data/entities/*.json");
const controllerDocs = import.meta.glob("../data/controllers/*.json");
const repositoryDocs = import.meta.glob("../data/repositories/*.json");
const serviceDocs = import.meta.glob("../data/services/*.json");
const otherDocs = import.meta.glob("../data/others/*.json");

export const types = [
  {
    match: (name) => name.endsWith("Controller"),
    docs: controllerDocs,
    path: (name) => `../data/controllers/${name}.json`
  }, 
  {
    match: (name) => name.endsWith("Service"),
    docs: serviceDocs,
    path: (name) => `../data/services/${name}.json`
  },
  {
    match: (name) => name.endsWith("Repository"),
    docs: repositoryDocs,
    path: (name) => `../data/repositories/${name}.json`
  },
    {
    match: (name) => name.endsWith("Filter"), 
    docs: otherDocs,
    path: (name) => `../data/others/${name}.json`
  },
  {
    match: () => true, // fallback (entity)
    docs: entityDocs,
    path: (name) => `../data/entities/${name}.json`
  }

];