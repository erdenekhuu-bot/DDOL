import type { Struct, Schema } from '@strapi/strapi';

export interface DdTesting extends Struct.ComponentSchema {
  collectionName: 'components_dd_testings';
  info: {
    displayName: 'testing';
  };
  attributes: {
    s: Schema.Attribute.String;
  };
}

export interface DdCody extends Struct.ComponentSchema {
  collectionName: 'components_dd_codies';
  info: {
    displayName: 'Cody';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dd.testing': DdTesting;
      'dd.cody': DdCody;
    }
  }
}
