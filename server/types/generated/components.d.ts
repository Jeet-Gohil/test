import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlocks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blocks';
  info: {
    description: '';
    displayName: 'blocks';
  };
  attributes: {};
}

export interface ComponentsUser extends Struct.ComponentSchema {
  collectionName: 'components_components_users';
  info: {
    displayName: 'User';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface UserBlockUser extends Struct.ComponentSchema {
  collectionName: 'components_user_block_users';
  info: {
    displayName: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blocks': BlocksBlocks;
      'components.user': ComponentsUser;
      'user-block.user': UserBlockUser;
    }
  }
}
