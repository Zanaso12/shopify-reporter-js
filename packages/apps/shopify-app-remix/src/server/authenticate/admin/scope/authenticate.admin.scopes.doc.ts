import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Scopes',
  description:
    'Contains functions used to manage optional scopes for your app.\n\nThis object is returned on authenticated Admin requests.',
  category: 'APIs',
  type: 'object',
  isVisualComponent: false,
  definitions: [
    {
      title: 'scopes',
      description:
        'Provides utilities that apps can use to manage optional scopes for the app using the Admin API.',
      type: 'ScopesContext',
    },
  ],
  jsDocTypeExamples: ['ScopesApiContext'],
  related: [
    {
      name: 'Admin context',
      subtitle: 'Authenticate requests from Shopify Admin.',
      url: '/docs/api/shopify-app-remix/authenticate/admin',
    },
  ],
};

export default data;
