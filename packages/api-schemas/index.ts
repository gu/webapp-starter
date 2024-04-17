import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { Config } from './schemas/config';

const schemas = validationMetadatasToSchemas({
  refPointerPrefix: '#/components/schemas/',
});

export { Config, schemas };
